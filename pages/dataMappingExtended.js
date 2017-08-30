var { otherKeywordTagMapping, finalKeywordFilter } =
(function () {

    let _otherKeywordTagMapping = {
        "inter-islands ferry services": ["islands", "new territories"],
        "mtr": ["mtr"],
        "east rail line": ["mtr", "east rail line"],
        "west rail line": ["mtr", "west rail line"],
        "island line": ["mtr", "island line"],
        "kwun tong line": ["mtr", "kwun tong line"],
        "tsuen wan line": ["mtr", "tsuen wan line"],
        "tseung kwan o line": ["mtr", "tseung kwan o line"],
        "tung chung line": ["mtr", "tung chung line"],
        "south island line": ["mtr", "south island line"],
        "ma on shan line": ["mtr", "ma on shan line"]
    }

    let _filterKeywords = [
        "hong kong island",
        "kowloon",
        "new territories",
        "mtr",
        "tolo highway",
        "tuen mun road",
        "aberdeen tunnel",
        "island eastern corridor",
        "kwun tong road",
        "lai chi kok road",
        "princess margaret road",
        "shing mun tunnel",
        "lion rock tunnel",
        "tate's cairn tunnel",
        "tai lam tunnel",
        "fanling highway",
        "cross harbour tunnel",
        "eastern harbour tunnel",
        "western harbour crossing",
        "east rail line",
        "west rail line",
        "island line",
        "kwun tong line",
        "tsuen wan line",
        "tseung kwan o line",
        "tung chung line",
        "south island line",
        "ma on shan line",
        "central and western",
        "wan chai",
        "eastern",
        "southern",
        "yau tsim mong",
        "sham shui po",
        "kowloon city",
        "wong tai sin",
        "kwun tong",
        "kwai tsing",
        "tsuen wan",
        "tuen mun",
        "yuen long",
        "north",
        "tai po",
        "sha tin",
        "sai kung",
        "islands"

        // "屯門公路", "Tuen Mun Road"
        // "海底隧道", "Cross Harbour Tunnel"
        // "東區海底隧道", "Eastern Harbour Tunnel"
        // "西區海底隧道", "Western Harbour Crossing"
        // "香港仔隧道", "Aberdeen Tunnel"
        // "東區走廊", "Island Eastern Corridor"
        // "粉嶺公路", "Fanling Highway"
        // "觀塘道", "Kwun Tong Road"
        // "荔枝角道", "Lai Chi Kok Road",
        // "公主道", "Princess Margaret Road",
        // "城門隧道", "Shing Mun Tunnel"
    ];
    var _finalKeywordFilter = {};
    _filterKeywords.forEach(function (keyword, i) {
        _finalKeywordFilter[keyword] = i+1;
    });

    return {
        otherKeywordTagMapping: _otherKeywordTagMapping,
        finalKeywordFilter: _finalKeywordFilter
    }
})();

/*module.exports = {
    otherKeywordTagMapping, //Map<Eng Keyword, Array<Tags>>
    finalKeywordFilter, //Map<Eng Keyword, Weight Index>
}*/