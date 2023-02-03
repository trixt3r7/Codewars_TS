import { romanNumerDec } from '../../src/6kyu/romanNumeralDecoder';
const { assert } = require('chai');

describe("Roman Numerals Decoder", function() {
    it('XXI should equal 21', () => {
        assert.equal(romanNumerDec('XXI'), 21);
    });
    it('I should equal 1', () => {
        assert.equal(romanNumerDec('I'), 1);
    });
    it('IV should equal 4', () => {
        assert.equal(romanNumerDec('IV'), 4);
    });
    it('MMVIII should equal 2008', () => {
        assert.equal(romanNumerDec('MMVIII'), 2008);
    });
    it('MDCLXVI should equal 1666', () => {
        assert.equal(romanNumerDec('MDCLXVI'), 1666);
    });
});