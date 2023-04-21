import { getLengthOfMissingArray } from '../../src/6kyu/lengthOfMissingArray';
const { assert } = require('chai');

describe("Length of missing array", function(){
  it("Basic Tests", function(){
    assert.strictEqual(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
    assert.strictEqual(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
    assert.strictEqual(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
    assert.strictEqual(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);
    assert.strictEqual(getLengthOfMissingArray([ ]), 0);
    assert.strictEqual(getLengthOfMissingArray([ [], [ 0, 0, 0 ], [ 4, 0, 3, 4 ], [ 2, 1 ] ]), 0);
    assert.strictEqual(getLengthOfMissingArray([ [1, 2], [1], [], [3, 3, 1, 0, 3, 2, 4], [4, 1, 2, 2, 1, 4, 2, 4, 4], [2, 2, 1], [1, 2, 3, 4], [2, 1, 1, 4, 4, 0], [0, 0, 1, 1, 1, 0, 3, 2] ]), 0);
  });
  it("Random Tests", function(){
    assert.strictEqual(getLengthOfMissingArray([ [ 2, 1, 3, 4, 3, 2 ], [ 4, 3, 3, 4 ], [ 0, 4, 1, 2, 2, 3, 3 ], [ 1, 4, 3 ], [ 2, 4 ] ]), 5);
    assert.strictEqual(getLengthOfMissingArray([ [], [ 3 ], [ 1, 4 ], [ 1, 0, 4 ], [ 2, 0, 0, 2 ], [ 0, 2, 3, 1, 0, 0 ] ]), 0);
  });
});