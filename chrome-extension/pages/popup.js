$(function () {
    $('#news-items-wrapper').html()
    chrome.runtime.sendMessage({type: "trafficNewsBot.queryTrafficNews"}, function(response){
        let trafficNewsItems = response.items;
        let listWrapper = $('<ul>');
        $.each(trafficNewsItems, function(i, item){
            
            let filteredTagsText = item['tagInfo']['filteredTags'].map(tag=>'<span class="badge">'+tag.ch+'</span>').join(' ');
            
            let itemMessageHtml = highlightChiContentsMessage(item.message);

            /*let itemMessageHtml = item.message;
            _tagKeywords.forEach(function(keyword, i){
                itemMessageHtml = itemMessageHtml.replace(new RegExp(keyword, 'g'), `#$%${i}%$#`);
            });
            _tagKeywords.forEach(function(keyword, i){
                itemMessageHtml = itemMessageHtml.replace(new RegExp(`#\\$%${i}%\\$#`, 'g'), `<mark data-markjs="true">${keyword}</mark>`);
            });*/
            itemMessageHtml = itemMessageHtml.replace(/<#\$%>/g, '<mark data-markjs="true">').replace(/<#\$%\/>/g, '</mark>');

            let itemElem = $('<li>').html(`<item class="traffic-news-item"><strong>${item.referenceDate}</strong> - <small>訊息 ${item.id}:</small><br />`+
            `<label>Tags:</label><span style="margin-left:0.5em">${filteredTagsText}</span><br />`+
            `<span class="traffic-news-item-message">${itemMessageHtml}</span></item>`).css('margin-bottom', '1em');

            listWrapper.append(itemElem);
        });
        $('#news-items-wrapper').append(listWrapper);
    });
    
});