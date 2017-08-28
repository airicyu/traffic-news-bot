$(function () {

    chrome.storage.sync.get(['officeOffHour', 'officeOffMinute', 'debugMode'], function (setting) {
        $('#officeOffHour').val(setting.officeOffHour);
        $('#officeOffMinute').val(setting.officeOffMinute);
        $('#checkbox').prop('checked', setting.debugMode);
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
        chrome.runtime.sendMessage({type: "trafficNewsBot.debugSettings", data: {}}, function(response){
            console.log(JSON.stringify(response, null, 2));
        });
    });
    $('#debugMode').change(function () {
        if ($(this).is(':checked')) {
            chrome.storage.sync.set({debugMode: true})
        } else {
            chrome.storage.sync.set({debugMode: false})
        }
    });
    
    $(document).keydown(
        function(e) {
            switch (e.key) {
            case 'a':// enter
                if (e.altKey) {
                    $('.debug-control-ui').show();
                }
                break;
            }
    });
})