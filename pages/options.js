$(function () {

    chrome.storage.sync.get(['officeOffHour', 'officeOffMinute'], function (setting) {
        $('#officeOffHour').val(setting.officeOffHour);
        $('#officeOffMinute').val(setting.officeOffMinute);
    });

    $('#saveSettings').click(function () {
        let officeOffHour = parseInt($('#officeOffHour').val());
        let officeOffMinute = parseInt($('#officeOffMinute').val());

        chrome.runtime.sendMessage({type: "trafficNewsBot.saveSettings", data: {'officeOffHour': officeOffHour, 'officeOffMinute': officeOffMinute}});
    });
    
    $('#clearTrafficNewsCache').click(function () {
        chrome.runtime.sendMessage({type: "trafficNewsBot.clearTrafficNewsCache"});
    });

    $('#debugSettings').click(function () {
        chrome.runtime.sendMessage({type: "trafficNewsBot.debugSettings"}, function(response){
            console.log(response);
        });
    });
    
    $(document).keydown(
        function(e) {
            switch (e.key) {
            case 'a':// enter
                if (e.altKey) {
                    $('#debugSettings').show();
                }
                break;
            }
    });
})