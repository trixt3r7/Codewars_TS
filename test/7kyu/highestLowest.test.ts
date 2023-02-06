const { assert } = require('chai');
import { HighestLowest } from '../../src/7kyu/highestLowest';

describe("Pick out max and min", function() {
  it("Test 1", function() {
    assert.strictEqual(HighestLowest.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
  it("Test 2", function() {
    assert.strictEqual(HighestLowest.highAndLow("1 2 3"), "3 1");
  });
});