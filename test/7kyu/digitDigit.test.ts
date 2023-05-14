const { assert } = require('chai');
import { squareDigits } from '../../src/7kyu/digitDigit';

describe("squareDigits", function() {
  it("should pass a sample test", function() {
    assert.strictEqual(squareDigits(9119), 811181);
    assert.strictEqual(squareDigits(0), 0);
  });
});