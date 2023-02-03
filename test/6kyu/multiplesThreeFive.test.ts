import { MultiplesThreeFive } from '../../src/6kyu/multiplesThreeFive';
const { assert } = require('chai');

describe("Multiples of 3 or 5", function(){
  it("10 should return 23",() =>  {
    assert.strictEqual(MultiplesThreeFive.solution(10), 23)
  });

  it("3 should return 0",() =>  {
    assert.strictEqual(MultiplesThreeFive.solution(3), 0)
  });

  it("4 should return 3",() =>  {
    assert.strictEqual(MultiplesThreeFive.solution(4), 3)
  });
});