const { assert } = require('chai');
import { domainName } from "../../src/5kyu/extractDomain";

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
    assert.equal(domainName("http://github.com/carbonfive/raygun"), "github");
    assert.equal(domainName("http://www.zombie-bites.com"), "zombie-bites");
    assert.equal(domainName("https://www.cnet.comn"), "cnet");
  })  
})
