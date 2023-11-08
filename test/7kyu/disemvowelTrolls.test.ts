const { assert } = require('chai');
import { disemvowel } from '../../src/7kyu/disemvowelTrolls';

describe("disemvowel", function() {
  it("should pass a sample test", function() {
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?");
    assert.strictEqual(disemvowel(""), "");
    assert.strictEqual(disemvowel("aeiou"), "");
    assert.strictEqual(disemvowel("aeiouAEIOU"), "");
    assert.strictEqual(disemvowel("aeiou aeiou"), "");
    assert.strictEqual(disemvowel("aeiou aeiou aeiou"), "");
    assert.strictEqual(disemvowel("aeiou aeiou aeiou aeiou"), "");
    assert.strictEqual(disemvowel("aeiou aeiou aeiou aeiou aeiou"), "");assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
  });
});