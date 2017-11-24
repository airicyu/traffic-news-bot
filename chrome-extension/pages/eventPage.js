const x2js = new X2JS();
const TRAFFIC_NEWS_ENDPOINT = 'http://resource.data.one.gov.hk/td/en/specialtrafficnews.xml';
const TRAFFIC_NEWS_BOT_NEWS_NOTIFICATION_ID = 'trafficNewsBot-traffic-news-notification';
const TRAFFIC_NEWS_BOT_DAILY_SCHEDULE_JOB_NAME = 'trafficNewsBot-daily-schedule-job';
const TRAFFIC_NEWS_BOT_SCHEDULE_JOB_NAME = 'trafficNewsBot-schedule-job';
const TRAFFIC_NEWS_BOT_CLEAR_SCHEDULE_JOB_NAME = 'trafficNewsBot-clear-schedule-job';
const DEFAULT_OFFICE_OFF_HOUR = 18;
const DEFAULT_OFFICE_OFF_MINUTE = 0;

var debug = function () {
    let args = arguments;
    chrome.storage.sync.get('debugMode', function (store) {
        if (store.debugMode) {
            console.log.apply(console, args);
        }
    });
};

init();



/* #################################################### */
/* Default running logic */

/* setting default office hour setting value */
async function init() {
    debug('traffic news bot init extension');
    chrome.storage.sync.get(['enableNotification', 'officeOffHour', 'officeOffMinute', 'filterTagsShowAll', 'filterTags', 'debugMode'], function (store) {
        let enableNotification = store.enableNotification !== undefined ? store.enableNotification : true;
        let filterTagsShowAll = store.filterTagsShowAll !== undefined ? store.filterTagsShowAll : true;
        let officeOffHour = store.officeOffHour !== undefined ? store.officeOffHour : DEFAULT_OFFICE_OFF_HOUR;
        let officeOffMinute = store.officeOffMinute !== undefined ? store.officeOffMinute : DEFAULT_OFFICE_OFF_MINUTE;
        let filterTags = store.filterTags !== undefined ? store.filterTags : [];
        let debugMode = store.debugMode !== undefined ? store.debugMode : false;

        chrome.storage.sync.set({
            'enableNotification': enableNotification,
            'filterTagsShowAll': filterTagsShowAll,
            'officeOffHour': officeOffHour,
            'officeOffMinute': officeOffMinute,
            'filterTags': filterTags
        }, function () {
            updateScheduleJob(officeOffHour, officeOffMinute);
        });
    });
}

/* #################################################### */





/* #################################################### */

/* Handling option page events*/
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type == 'trafficNewsBot.saveSettings') {
        let enableNotification = message.data.enableNotification !== undefined ? message.data.enableNotification : true;
        let filterTagsShowAll = message.data.filterTagsShowAll !== undefined ? message.data.filterTagsShowAll : true;
        let filterTags = message.data.filterTags !== undefined ? message.data.filterTags : [];
        let officeOffHour = message.data.officeOffHour;
        let officeOffMinute = message.data.officeOffMinute;
        chrome.storage.sync.set({
            enableNotification,
            officeOffHour,
            officeOffMinute,
            filterTagsShowAll,
            filterTags
        }, function () {
            updateScheduleJob(officeOffHour, officeOffMinute);
        });
    } else if (message.type == 'trafficNewsBot.clearTrafficNewsCache') {
        clearAllMessagesHash().then(function () {
            getOfficeOffTime().then(function ({ officeOffHour, officeOffMinute }) {
                updateScheduleJob(officeOffHour, officeOffMinute);
            });
        });
    } else if (message.type == 'trafficNewsBot.debugSettings') {
        chrome.storage.sync.get(null, function (store) {
            chrome.alarms.getAll(function (alarms) {
                let ourAlarms = JSON.parse(JSON.stringify(alarms.filter(alarm => [TRAFFIC_NEWS_BOT_DAILY_SCHEDULE_JOB_NAME, TRAFFIC_NEWS_BOT_CLEAR_SCHEDULE_JOB_NAME, TRAFFIC_NEWS_BOT_SCHEDULE_JOB_NAME].includes(alarm.name))));
                ourAlarms.forEach(function (alarm) {
                    alarm.scheduleTimeDateString = new Date(alarm.scheduledTime).toLocaleString();
                });
                sendResponse({ store: store, alarms: ourAlarms });
            })
        });
        return true;
    }
});

/* Handling popup page events*/
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type == 'trafficNewsBot.queryTrafficNews') {
        (async function () {

            let messages = [];
            try {
                messages = await getTrafficNewsMessages();
            } catch (e) {
                debug(e);
            }

            messages.forEach(tagMessage);

            await new Promise((resolve) => {
                chrome.storage.sync.get(['filterTagsShowAll', 'filterTags'], function (setting) {
                    if (!setting.filterTagsShowAll) {
                        messages = messages.filter(function (msg) {
                            let msgTags = msg['tagInfo']['filteredTags'].map(tag => tag.en);
                            for (let filterTag of setting.filterTags) {
                                if (msgTags.includes(filterTag)) {
                                    return true;
                                }
                            }
                            return false;
                        })
                    }
                    resolve();
                });
            });

            let notificationItems = messages.map((msg) => {
                return {
                    id: msg['msgID'],
                    status: msg['CurrentStatus'],
                    referenceDate: msg['ReferenceDate'],
                    message: msg['ChinText'],
                    tagInfo: msg['tagInfo']
                };
            });
            sendResponse({ items: notificationItems });

        })();
        return true;
    }
});

/* #################################################### */





/* #################################################### */
/* Handling notification events */
chrome.notifications.onClicked.addListener(function (notificationId) {
    if (notificationId === TRAFFIC_NEWS_BOT_NEWS_NOTIFICATION_ID) {
        chrome.tabs.create({ 'url': chrome.extension.getURL('/pages/popup.html') }, function (tab) {});
    }
});
/* #################################################### */





/* #################################################### */
/* Handling schedule job events */
chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name === TRAFFIC_NEWS_BOT_DAILY_SCHEDULE_JOB_NAME) {
        debug(TRAFFIC_NEWS_BOT_DAILY_SCHEDULE_JOB_NAME);
        dailyScheduleJob();

    } else if (alarm.name === TRAFFIC_NEWS_BOT_CLEAR_SCHEDULE_JOB_NAME) {
        debug(TRAFFIC_NEWS_BOT_CLEAR_SCHEDULE_JOB_NAME);
        chrome.alarms.clear(TRAFFIC_NEWS_BOT_SCHEDULE_JOB_NAME);

    } else if (alarm.name === TRAFFIC_NEWS_BOT_SCHEDULE_JOB_NAME) {
        debug(TRAFFIC_NEWS_BOT_SCHEDULE_JOB_NAME);
        chrome.storage.sync.get('enableNotification', function (setting) {
            if (setting.enableNotification) {
                checkTrafficNews();
            }
        });
    }
});

async function dailyScheduleJob() {
    chrome.alarms.create(TRAFFIC_NEWS_BOT_SCHEDULE_JOB_NAME, {
        when: moment().valueOf() + 1000,
        periodInMinutes: 5
    });

    let { officeOffHour, officeOffMinute } = await getOfficeOffTime();
    let nextOfficeOffTime = getNextOfficeOffTime(officeOffHour, officeOffMinute).valueOf();
    chrome.alarms.create(TRAFFIC_NEWS_BOT_CLEAR_SCHEDULE_JOB_NAME, {
        when: nextOfficeOffTime
    });
}
/* #################################################### */





/* #################################################### */
/* Util functions */

/* util function for getting office off time from storage */
async function getOfficeOffTime() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['officeOffHour', 'officeOffMinute'], function (store) {
            let officeOffHour = store.officeOffHour !== undefined ? store.officeOffHour : DEFAULT_OFFICE_OFF_HOUR;
            let officeOffMinute = store.officeOffMinute !== undefined ? store.officeOffMinute : DEFAULT_OFFICE_OFF_MINUTE;
            resolve({ officeOffHour, officeOffMinute });
        });
    });
}

/* util function for update schedule job */
async function updateScheduleJob(officeOffHour, officeOffMinute) {
    return new Promise((resolve, reject) => {
        chrome.alarms.clear(TRAFFIC_NEWS_BOT_DAILY_SCHEDULE_JOB_NAME, function (wasCleared) {
            chrome.alarms.clear(TRAFFIC_NEWS_BOT_CLEAR_SCHEDULE_JOB_NAME, function (wasCleared) {
                chrome.alarms.clear(TRAFFIC_NEWS_BOT_SCHEDULE_JOB_NAME, function (wasCleared) {

                    let nextScheduleJobTriggerTime = getNextOfficeOffOneHourBeforeTime(officeOffHour, officeOffMinute);

                    let delayMs = Math.round(30 + Math.random() * 60) * 1000;

                    chrome.alarms.create(TRAFFIC_NEWS_BOT_DAILY_SCHEDULE_JOB_NAME, {
                        when: nextScheduleJobTriggerTime.valueOf() + delayMs,
                        periodInMinutes: 24 * 60
                    });

                    if (isNeedDoOneoffChecking(officeOffHour, officeOffMinute)) {
                        dailyScheduleJob();
                    }

                    resolve();
                });

            });
        })
    });
}

/* Util methods for checking whether at the time when the extension just installed is at the time which is almost off work and need a one off schedule job trigger */
function isNeedDoOneoffChecking(officeOffHour, officeOffMinute) {
    let now = moment();
    let nextOfficeOffTime = getNextOfficeOffTime(officeOffHour, officeOffMinute);

    if (isDateValidOfficeDay(now) && now.valueOf() > moment(nextOfficeOffTime.valueOf()).subtract(1, 'hour').valueOf() && now.valueOf() < nextOfficeOffTime.valueOf()) {
        return true;
    }
    return false;
}

/* Util methods for getting next off work time for scheduling schedule job */
function getNextOfficeOffTime(officeOffHour, officeOffMinute) {
    let now = moment();
    let nextTime = moment().hours(officeOffHour).minutes(officeOffMinute);

    if (now.valueOf() > nextTime.valueOf()) {
        nextTime.add(1, 'day');
    }

    while (true) {
        if (!isDateValidOfficeDay(nextTime)) {
            nextTime.add(1, 'day');
            continue;
        } else {
            break;
        }
    }

    return nextTime;
}

/* Util methods for getting next time which is 1hr before off work time for scheduling schedule job */
function getNextOfficeOffOneHourBeforeTime(officeOffHour, officeOffMinute) {
    let now = moment();
    let nextTime = moment().hours(officeOffHour).minutes(officeOffMinute).subtract(1, 'hour');

    while (true) {
        if (now.valueOf() > nextTime.valueOf() || !isDateValidOfficeDay(nextTime)) {
            nextTime.add(1, 'day');
            continue;
        } else {
            break;
        }
    }

    return nextTime;
}

/* Util methods for checking whether the date is weekday monday to friday */
function isDateValidOfficeDay(checkDate) {
    return checkDate.day() >= 1 && checkDate.day() <= 5;
}

/* util method for business operation of checking traffice news. It may send notification if there are updated items. */
async function checkTrafficNews() {
    return new Promise(async function (resolve, reject) {
        await clearOutdatedMessagesHash();
        let rawMessages = [];
        try {
            rawMessages = await getTrafficNewsMessages();
        } catch (e) {
            debug(e);
        }
        let filteredMessages = await filterTrafficNewsMessages(rawMessages);
        filteredMessages.forEach(tagMessage);

        await new Promise((resolve) => {
            chrome.storage.sync.get(['filterTagsShowAll', 'filterTags'], function (setting) {
                if (!setting.filterTagsShowAll) {
                    filteredMessages = filteredMessages.filter(function (msg) {
                        let msgTags = msg['tagInfo']['filteredTags'].map(tag => tag.en);
                        for (let filterTag of setting.filterTags) {
                            if (msgTags.includes(filterTag)) {
                                return true;
                            }
                        }
                        return false;
                    })
                }
                resolve();
            });
        });

        let notificationItems = filteredMessages.map((msg) => {
            return {
                title: msg['tagInfo']['filteredTags'].map(tag => tag.ch).join(', '),
                message: msg['ChinText']
            };
        });

        debug(notificationItems);
        if (notificationItems && notificationItems.length) {
            await sendTrafficNewsNotification(notificationItems);
        }

        resolve({ filteredMessages, notificationItems });
    });
}

function tagMessage(message) {
    message['tagInfo'] = mappingTagInfo(extractTags(message['EngText']));
}

/* util method for clear outdate message hash (we would not keep new hash cache which is older than today) */
async function clearOutdatedMessagesHash() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get({ 'messageHashmap': {} }, function (store) {
            let messageHashmap = store.messageHashmap;

            let todayDate = new Date().toLocaleDateString();
            for (var key in messageHashmap) {
                if (key != todayDate) {
                    delete messageHashmap[key];
                }
            }
            messageHashmap[todayDate] = messageHashmap[todayDate] || {};

            chrome.storage.sync.set({ 'messageHashmap': messageHashmap }, function () {
                resolve();
            });
        });
    });
}

/* util method for clear outdate message hash (we would not keep new hash cache which is older than today) */
async function clearAllMessagesHash() {
    return new Promise((resolve, reject) => {
        let todayDate = new Date().toLocaleDateString();
        let messageHashmap = {};
        messageHashmap[todayDate] = {};

        chrome.storage.sync.set({ 'messageHashmap': messageHashmap }, function () {
            resolve();
        });
    });
}

/* util method for call ws to getting traffic news item */
async function getTrafficNewsMessages() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', TRAFFIC_NEWS_ENDPOINT);
        xhr.timeout = 30 * 1000;
        xhr.onload = function () {
            let jsonResponse = x2js.xml_str2json(xhr.responseText);
            if (jsonResponse.body && jsonResponse.body.message) {
                if (!Array.isArray(jsonResponse.body.message)) {
                    jsonResponse.body.message = [jsonResponse.body.message];
                }
                jsonResponse.body.message = jsonResponse.body.message.map(function (message) {
                    if (message.ChinText.includes('********************')) {
                        message.ChinText = message.ChinText.substr(0, message.ChinText.indexOf('********************')).replace(/(　|–)+/g,'').trim();
                    }
                    return message;
                });
                resolve(jsonResponse.body.message);
            } else {
                reject({
                    error: new Error('Get traffic news query invalid response')
                });
            }
        };
        xhr.onerror = function () {
            reject({
                error: new Error(xhr.status + ' ' + xhr.statusText)
            });
        }
        xhr.onabort = function () {
            reject({
                error: new Error('Get traffic news query aborted')
            });
        }
        xhr.ontimeout = function () {
            reject({
                error: new Error('Get traffic news query timeouted')
            });
        }
        xhr.send();
    });
}

/* util method for filtering news which is not updated */
async function filterTrafficNewsMessages(messages) {
    return new Promise((resolve) => {
        chrome.storage.sync.get({ 'messageHashmap': {} }, function (store) {
            let messageHashmap = store.messageHashmap;
            let todayDate = new Date().toLocaleDateString();
            let currentMessageHashMap = messageHashmap[todayDate];

            let filteredMessages = [];
            for (let message of messages) {
                let messageHashKey = getMessageHashKey(message);
                let messageHash = getMessageHash(message);
                if (currentMessageHashMap[messageHashKey] != messageHash) {
                    filteredMessages.push(message);
                    currentMessageHashMap[messageHashKey] = messageHash;
                }
            }

            chrome.storage.sync.set({ 'messageHashmap': messageHashmap }, function () {
                resolve(filteredMessages);
            });
        });
    });
}

/* util method for generating news item message hash key */
function getMessageHashKey(message) {
    return message['msgID'];
}

/* util method for generating news item message hash */
function getMessageHash(message) {
    return message['msgID'] + "::" + message['CurrentStatus'];
}

/* util method for sending desktop news notification */
async function sendTrafficNewsNotification(items) {
    return new Promise((resolve) => {
        let notifOptions = {
            type: 'basic',
            iconUrl: '/icon/icon128.png',
            title: '最新交通消息',
            message: `有${items && items.length || 0}則更新消息`
        };
        chrome.notifications.create(TRAFFIC_NEWS_BOT_NEWS_NOTIFICATION_ID, notifOptions, function (notificationId) {
            resolve(notificationId);
        });
    });

}