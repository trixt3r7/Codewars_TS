import { evaluate } from '../../src/7kyu/theAtOperator';
const { assert } = require('chai');


describe("Fixed tests:", function() {
  it("Simple tests (2 values):", function() {
    const tests: [string, number | null][] = [
            ['1 @ 1', 4],
            ['3 @ 2', 13],
            ['6 @ 9', 66],
            ['4 @ -4', -9],
            ['5 @ 0', null],            
        ];
    tests.forEach((el: [string, number | null]) => {
      assert.strictEqual(evaluate(el[0]), el[1]);
    });
  });
  it("Simple tests (3 values):", function() {
    const tests: [string, number | null][] = [
            ['1 @ 1 @ -4', -9],
            ['2 @ 2 @ 2', 40],
            ['0 @ 1 @ 2', 0],
            ['38@38@31', 50242],                 
        ];
    tests.forEach((el: [string, number | null]) => {
      assert.strictEqual(evaluate(el[0]), el[1]);
    });
  });
  it("Advanced tests (4-9 values):", function() {
    const tests: [string, number | null][] = [
            ['13@1@17@36@30', 1207176],
            ['13@1@17@36', 37685],            
            ['37@12@18@4@15@2@33@21@15', 69102362163],                    
        ];
    tests.forEach((el: [string, number | null]) => {
      assert.strictEqual(evaluate(el[0]), el[1]);
    });
  });
  it("Complex tests (10+ values):", function() {
    const tests: [string, number | null][] = [
            ['21@18@22@20@25@29@22@35@32@2@6@36@28@21@39', 195108911366603640000],
            ['12@33@9@10@3@34@34@29@16@2', 874321867889],
            ['18@15@5@12@9@26@8@27@16@21', 1182451686160],
            ['9@8@26@7@1@23@1@0@14@26@4@32@9@16@6@19@28@10@23@16@20@11@7@34@30@16@27@37@25@38@22@37@26', null],
        ];
    tests.forEach((el: [string, number | null]) => {
      assert.strictEqual(evaluate(el[0]), el[1]);
    });
  });
});