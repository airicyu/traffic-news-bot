$(function () {
    $('#news-items-wrapper').html()
    chrome.runtime.sendMessage({type: "trafficNewsBot.queryTrafficNews"}, function(response){
        let trafficNewsItems = response.items;
        let listWrapper = $('<ul>');
        $.each(trafficNewsItems, function(i, item){
            let itemElem = $('<li>').html(`<strong>${item.referenceDate}</strong> - <small>訊息 ${item.id}:</small><br /><p>${item.message}</p>`).css('margin-bottom', '10px');
            listWrapper.append(itemElem);
        });
        $('#news-items-wrapper').append(listWrapper);
    });
    
    function initializeGoogleLiveTrafficMap() {
        var myLatlng = new google.maps.LatLng(22.3700198,114.2376049);
        var mapOptions = {
          zoom: 11,
          center: myLatlng
        }
      
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      
        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
      }
});