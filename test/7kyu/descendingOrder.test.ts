const { assert } = require('chai');
import { descendingOrder } from '../../src/7kyu/descendingOrder';


describe("descendingOrder", function() {
  it("should return some sample numbers in descending order", function() {
    assert.strictEqual(descendingOrder(0), 0);
    assert.strictEqual(descendingOrder(1), 1);
    assert.strictEqual(descendingOrder(42145), 54421);
    assert.strictEqual(descendingOrder(145263), 654321);
    assert.strictEqual(descendingOrder(123456789), 987654321);
  });
});