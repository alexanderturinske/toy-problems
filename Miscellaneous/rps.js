'use strict';
/**
 * Implement a function that lists out all possible ways one can play n rounds of
 * the game rock, paper, sciccors
 *
 * EXAMPLE:
 * console.log(rps(2));
 * //-> [[r, r], [r, p], [r, s], [p, r], [p, p], [p, s], [s, r], [s, p], [s, s]]
 */

var rps = function (n) {
  var options = ['r', 'p', 's'];
  var output = [];
  var traverse = function (path) {
    path = path || [];
    // base case
    if (path.length === n) {
      output.push(path);
      return;
    }
    // recursive case
    options.forEach(function (e) {
      traverse(path.concat(e));
    });
  };
  traverse();
  return output;
};

console.log(rps(3));

module.exports = {
  rps: rps,
};
