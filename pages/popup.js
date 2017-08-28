$(function () {
    $('#news-items-wrapper').html()
    chrome.runtime.sendMessage({type: "trafficNewsBot.queryTrafficNews"}, function(response){
        let trafficNewsItems = response.items;
        let listWrapper = $('<ul>');
        $.each(trafficNewsItems, function(i, item){
            
            let filteredTagsText = item['tagInfo']['filteredTags'].map(tag=>'<span class="badge">'+tag.ch+'</span>').join(' ');
            
            let itemElem = $('<li>').html(`<item class="traffic-news-item"><strong>${item.referenceDate}</strong> - <small>訊息 ${item.id}:</small><br />`+
            `<label>Tags:</label><span style="margin-left:0.5em">${filteredTagsText}</span><br />`+
            `<span class="traffic-news-item-message">${item.message}</span></item>`).css('margin-bottom', '1em');

            /* get Chinese keywords, reverse by length, and then matching the message */
            let _tagKeywords = [];
            chiKeywords.forEach(function(keyword){
                if (item.message.includes(keyword)){
                    _tagKeywords.push(keyword);
                }
            });
            _tagKeywords.sort(function(a, b){
                return a.length - b.length;
            });
            let tempBuffer = '';
            let tagKeywords = [];
            _tagKeywords.forEach(function(keyword){
                if (!tempBuffer.includes(keyword)){
                    tempBuffer+=keyword+';';
                    tagKeywords.push(keyword);
                }
            });
            
            itemElem.find('span.traffic-news-item-message').mark(tagKeywords);

            listWrapper.append(itemElem);
        });
        $('#news-items-wrapper').append(listWrapper);
    });
    
});