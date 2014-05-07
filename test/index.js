var assert = require('assert');
var quaternary = require('../');
describe('fn-quaternary', function () {
  it('fn.length should be 4', function () {
    var fn = function (a, b, c, d, e) {};
    assert(quaternary(fn).length == 4);
  });
  it('should be called with exactly four arguments', function () {
    var fn = function (a, b, c, d) {
      return arguments.length;
    }
    assert(quaternary(fn)() == 4);
  });
  it('fifth argument should be undefined', function () {
    var fn = function (a, b, c, d, e) {
      return typeof e;
    }
    assert(quaternary(fn)(1,2,3,4,5) === 'undefined');
  });
});
