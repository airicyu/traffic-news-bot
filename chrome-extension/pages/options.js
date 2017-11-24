$(function () {
    (async function () {

        $(':checkbox').bootstrapSwitch();

        let updateSetting = (function () {
            let enableNotification = $('#enable-notification').bootstrapSwitch('state');
            let officeOffHour = parseInt($('#officeOffHour').val());
            let officeOffMinute = parseInt($('#officeOffMinute').val());
            let filterTagsShowAll = $('#filter-tag-show_all').bootstrapSwitch('state');
            let filterTags = $('button.filter-tag[data-toggle-state="1"]').map(function () {
                return $(this).attr('data-tag')
            }).get();
            chrome.runtime.sendMessage({
                type: "trafficNewsBot.saveSettings",
                data: {
                    'enableNotification': enableNotification,
                    'officeOffHour': officeOffHour,
                    'officeOffMinute': officeOffMinute,
                    'filterTagsShowAll': filterTagsShowAll,
                    'filterTags': filterTags
                }
            });
        });

        await new Promise((resolve)=>{
            chrome.storage.sync.get(['enableNotification', 'officeOffHour', 'officeOffMinute', 'filterTagsShowAll', 'filterTags', 'debugMode'], function (setting) {
                $('#officeOffHour').val(setting.officeOffHour);
                $('#officeOffMinute').val(setting.officeOffMinute);
                $('#checkbox').prop('checked', setting.debugMode);
                $('#enable-notification').bootstrapSwitch('state', setting.enableNotification);
                $('#filter-tag-show_all').bootstrapSwitch('state', setting.filterTagsShowAll);
                (setting.filterTags || []).forEach(function (filterTag) {
                    $(`button.filter-tag[data-tag="${filterTag}"]`).attr('data-toggle-state', '1').removeClass('btn-default').addClass('btn-success');
                });
                resolve();
            });
        })
        
        $('button.filter-tag').click(function (e) {
            if ($(e.target).hasClass('btn-default')) {
                $(e.target).attr('data-toggle-state', '1').removeClass('btn-default').addClass('btn-success');
            } else {
                $(e.target).attr('data-toggle-state', '0').removeClass('btn-success').addClass('btn-default');
            }
        });

        $('#debugMode').change(function () {
            if ($(this).is(':checked')) {
                chrome.storage.sync.set({ debugMode: true })
            } else {
                chrome.storage.sync.set({ debugMode: false })
            }
        });

        $('#clearTrafficNewsCache').click(function () {
            chrome.runtime.sendMessage({ type: "trafficNewsBot.clearTrafficNewsCache" });
        });

        $('#debugSettings').click(function () {
            chrome.runtime.sendMessage({ type: "trafficNewsBot.debugSettings", data: {} }, function (response) {
                console.log(JSON.stringify(response, null, 2));
            });
        });

        /*
            when update settings UI, update to storage
        */
        (function () {
            $('#enable-notification,#filter-tag-show_all').on('switchChange.bootstrapSwitch', function (event, state) {
                updateSetting();
            });

            $('#officeOffHour,#officeOffMinute').change(function (e) {
                updateSetting();
            });

            $('button.filter-tag').click(function (e) {
                updateSetting();
            });
        })();

        $(document).keydown(
            function (e) {
                switch (e.key) {
                    case 'a': // enter
                        if (e.altKey) {
                            $('.debug-control-ui').show();
                        }
                        break;
                }
            });

    })();
});