import { decodeMorse } from '../../src/6kyu/decodeMorseCode';
const { assert } = require('chai');

const Test = {
  expect: (...args: any[]) => (assert as any)(...args),
  assertEquals: (...args: any[]) => (assert as any).equal(...args),
};

describe("Example from description", function() {
  it('HEY JUDE', () => {
    Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
  });
});

describe("My own tests", function() {
  it('SOMETHING', () => {
    Test.assertEquals(decodeMorse('... --- -- . - .... .. -. --.'), 'SOMETHING')
  });
});
describe("E", function() {
    it(' E ', () => {
      Test.assertEquals(decodeMorse(' . '), 'E')
    });
  });