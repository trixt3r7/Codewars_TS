const { assert } = require('chai');
import { stringEndsWith } from '../../src/7kyu/stringEndsWith';

describe("Sample Test Cases", function(){
  it("Should return true or false", function() {
    assert.equal(stringEndsWith('abcde', 'cde'), true);
    assert.equal(stringEndsWith('abcde', 'abc'), false);
    assert.equal(stringEndsWith('abc', ''), true);
  });
});