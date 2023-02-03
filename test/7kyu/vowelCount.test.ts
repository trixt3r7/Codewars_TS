const { assert } = require('chai');
import { VowelCount } from '../../src/7kyu/vowelCount';

describe("Vowels getCount", function(){
    it ("should return 5 for 'abracadabra'", () => {
        assert.strictEqual(VowelCount.getCount("abracadabra"), 5)
    });

    it ("should return 4 for 'pear tree'", () => {
        assert.strictEqual(VowelCount.getCount("pear tree"), 4)
    });

    it ("should return 13 for 'o a kak ushakov lil vo kashu kakao'", () => {
        assert.strictEqual(VowelCount.getCount("o a kak ushakov lil vo kashu kakao"), 13)
    });

    it ("should return 0 for 'my pyx'", () => {
        assert.strictEqual(VowelCount.getCount("my pyx"), 0)
    });
});
