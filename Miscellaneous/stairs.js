'use strict';
/**
 * Given a n stairs and the ability to travel up 1, 2, or 3 stairs at a time, how many
 * different ways can one traverse the stairs?
**/

var stairs = function (n) {
  var paths = arguments[1] || 0;
  // base case
  if ((n === 0) && (arguments[1] !== undefined)) {
    return 1;
  }
  // recursive case
  for (var i = 1; i <= 3; i++) {
    n -= i;
    if (n >= 0) {
      paths += stairs(n, 0);
    }
    n += i;
  }
  return paths;
};

console.log(0 === stairs(-1));
//-> 0
console.log(0 === stairs(0));
//-> 0
console.log(1 === stairs(1));
//-> 1
console.log(2 === stairs(2));
//-> 2
console.log(4 === stairs(3));
//-> 4
console.log(7 === stairs(4));
//-> 7
console.log(13 === stairs(5));
//-> 13


module.exports = {
  stairs: stairs,
};
