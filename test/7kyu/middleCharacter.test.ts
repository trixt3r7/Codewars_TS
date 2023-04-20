const { assert } = require('chai');
import { getMiddle } from '../../src/7kyu/middleCharacter';

function test(string:string, expected:string) {
  assert.strictEqual(getMiddle(string), expected)
}

describe("Get the Middle Character", function(){
  it("should handle basic tests", function() {
    test("test", "es");
    test("testing", "t");
  });
});