'use strict';

const should = require('chai').should;
const expect = require('chai').expect;

var testRecords = require('./test-records')

var {
    roadToDistrictMapping,
    districtToDistrict18Mapping,
    district18ToRegionMapping,
    dictionary,
    chiKeywords
} = require('./../chrome-extension/pages/dataMapping');

var {
    otherKeywordTagMapping,
    finalKeywordFilter
} = require('./../chrome-extension/pages/dataMappingExtended');

var {
    extractTags,
    mappingTagInfo,
    highlightChiContentsMessage
} = require('./../chrome-extension/pages/tagsExtractor.js');

describe('Test traffic-news-bot tagging logic', function () {
    this.timeout(2000);

    it("Test records", function (done) {
        let testCounter = 0;

        testRecordLoop: for (let testRecord of testRecords) {
            testCounter++;
            let actualTags = extractTags(testRecord.input);

            let chiTags = actualTags.map(tag => dictionary[tag]);
            if (chiTags.includes(undefined)) {
                console.log(testRecord, actualTags, chiTags)
            }
            expect(chiTags.includes(undefined)).to.equal(false);
    
            if (actualTags.length !== testRecord.expectedTags.length) {
                console.error(`Record ${testCounter}, Record not match!`, 'testRecord:', testRecord, 'actualTags:', actualTags);
                expect(actualTags.length).to.equal(testRecord.expectedTags.length)
                continue testRecordLoop;
            } else {
                for (let tag of testRecord.expectedTags) {
                    if (!actualTags.includes(tag)) {
                        console.error(`Record ${testCounter}, Record not match!`, 'testRecord:', testRecord, 'actualTags:', actualTags);
                        expect(actualTags.includes(tag)).to.equal(true);
                        continue testRecordLoop;
                    }
                }
            }
        }
        done();
    });
});