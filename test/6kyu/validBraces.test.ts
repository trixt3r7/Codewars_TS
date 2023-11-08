const { assert } = require('chai');
import { validBraces } from "../../src/6kyu/validBraces";

describe("solution", function() {
  it("should handle basic tests", function() {
    assert.strictEqual(validBraces("()"), true); 
    assert.strictEqual(validBraces("[(])"), false);
    //write more tests here
    assert.strictEqual(validBraces("(){}[]"), true);
    assert.strictEqual(validBraces("([{}])"), true);
    assert.strictEqual(validBraces("(}"), false);
    assert.strictEqual(validBraces("[(])"), false);
    assert.strictEqual(validBraces("[({})](]"), false);
  });
});