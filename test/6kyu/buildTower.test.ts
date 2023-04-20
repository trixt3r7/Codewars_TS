// See https://www.chaijs.com for how to use Chai.
const { assert } = require('chai');
import { towerBuilder } from "../../src/6kyu/buildTower";


describe("towerBuilder", function(){
  it("Basic Test", function() {    
    assert.deepEqual(towerBuilder(1), ["*"]);
    assert.deepEqual(towerBuilder(2), [" * ","***"]);
    assert.deepEqual(towerBuilder(3), ["  *  "," *** ","*****"]);
  })
  it("Large Test", function() {
    assert.deepEqual(towerBuilder(6), ["     *     ","    ***    ","   *****   ", "  *******  ", " ********* ","***********"]);
  })
});
