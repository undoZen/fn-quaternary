module.exports = function (fn) {
  return function (a, b, c, d) {
    return fn.call(this, a, b, c, d);
  }
};
