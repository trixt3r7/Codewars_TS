const { assert } = require('chai');
import { binaryArrayToNumber } from '../../src/7kyu/onesAndZeros';

describe("One's and Zero's", () => {
  it("Simple binary to number tests", () => {
      assert.strictEqual(binaryArrayToNumber([0,0,0,1]), 1);
      assert.strictEqual(binaryArrayToNumber([0,0,1,0]), 2);
      assert.strictEqual(binaryArrayToNumber([1,1,1,1]), 15);
      assert.strictEqual(binaryArrayToNumber([0,1,1,0]), 6);
  });
});
