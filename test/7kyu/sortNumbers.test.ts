const { assert } = require('chai');
import { sortNumbers } from '../../src/7kyu/sortNumbers';

describe("Sample Test Cases", function(){
  it("Should return an array", function() {
    assert.deepEqual(sortNumbers([1, 2, 10, 50, 5]), [1, 2, 5, 10, 50]);
    assert.deepEqual(sortNumbers([]), []);
  });
});