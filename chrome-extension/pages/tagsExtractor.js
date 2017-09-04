try {
    var {
        roadToDistrictMapping,
        districtToDistrict18Mapping,
        district18ToRegionMapping,
        dictionary,
        chiKeywords
    } = require('./dataMapping');
    var {
        otherKeywordTagMapping,
        finalKeywordFilter
    } = require('./dataMappingExtended');
} catch (e) {}

function extractTags(input) {
    let tags = [];
    let currentStr = input && input.toLowerCase().replace(/\s+/g, " ").replace(/&apos;/g, "'");

    //check roads
    for (let roadMapping of roadToDistrictMapping) {
        let i = currentStr.indexOf(roadMapping[0]);
        if (i == -1) {
            continue;
        }

        currentStr = currentStr.replace(new RegExp(roadMapping[0], 'g'), '');
        let districts = roadMapping[1];

        let district18s = districts
            .map(district => districtToDistrict18Mapping[district])
            .filter(district => typeof district !== 'undefined')
            .filter((el, i, arr) => arr.indexOf(el) === i);

        let regions = district18s
            .map(district18 => district18ToRegionMapping[district18])
            .filter(region => typeof region !== 'undefined')
            .filter((el, i, arr) => arr.indexOf(el) === i);

        tags.push(roadMapping[0]);
        tags.push.apply(tags, districts);
        tags.push.apply(tags, district18s);
        tags.push.apply(tags, regions);
    }

    //check districts
    for (let district in districtToDistrict18Mapping) {
        let i = currentStr.indexOf(district);
        if (i == -1) {
            continue;
        }

        currentStr = currentStr.replace(new RegExp(district, 'g'), '');

        let district18 = districtToDistrict18Mapping[district];
        let region = district18 && district18ToRegionMapping[district18];

        tags.push(district);
        district18 && tags.push(district18);
        region && tags.push(region);
    }

    //check other keywords
    for (let keyword in otherKeywordTagMapping) {
        if (currentStr.includes(keyword)) {
            currentStr = currentStr.replace(new RegExp(keyword, 'g'), '');
            tags.push.apply(tags, otherKeywordTagMapping[keyword]);
        }
    }

    tags = tags.filter((el, i, arr) => arr.indexOf(el) === i);
    return tags;
}

function mappingTagInfo(tags){
    let result = {};
    let _tags = tags.map(tag=>{
        return {
            en: tag,
            ch: dictionary[tag]
        }
    });
    _tags.sort(function(a, b){
        let aKey = finalKeywordFilter[a.en] || 999999;
        let bKey = finalKeywordFilter[b.en] || 999999;
        return aKey - bKey;
    });
    
    result.fullTags = _tags;
    result.filteredTags = _tags.filter(tag=>finalKeywordFilter[tag.en]!==undefined);

    return result;
}

function highlightChiContentsMessage(message){
    /* get Chinese keywords(already sorted by length desc), and then matching the message */
    let _tagKeywords = [];
    chiKeywords.forEach(function(keyword){
        if (message.includes(keyword)){
            _tagKeywords.push(keyword);
        }
    });
    
    let itemMessageHtml = message;
    _tagKeywords.forEach(function(keyword, i){
        itemMessageHtml = itemMessageHtml.replace(new RegExp(keyword, 'g'), `<#$%>${i}<#$%/>`);
    });
    _tagKeywords.forEach(function(keyword, i){
        itemMessageHtml = itemMessageHtml.replace(new RegExp(`<#\\$%>${i}<#\\$%/>`, 'g'), `<#$%>${keyword}<#$%/>`);
    });

    return itemMessageHtml;
}

try {
    module.exports = {
        extractTags, mappingTagInfo, highlightChiContentsMessage
    }
} catch (e) {}