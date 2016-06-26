'use strict';
/**
You are given two jugs with capacities x and y litres. There is an infinite amount of water supply available. You need to determine whether it is possible to measure exactly z litres using these two jugs.

If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end.

Operations allowed:
Fill any of the jugs completely with water.
Empty any of the jugs.
Pour water from one jug into another till the other jug is completely full or the first jug itself is empty.

**/

var waterJugs = function (jug1, jug2, desiredVolume) {
  // var possibilities = [jug1, jug2, Math.abs(jug1 - jug2), jug1 + jug2];
  // base case
  if (desiredVolume < 0) {
    return false;
  }
  if (desiredVolume === 0) {
    return true;
  }
  // recursive case
  if (waterJugs(jug1, jug2, desiredVolume - jug1) ||
  waterJugs(jug1, jug2, desiredVolume - jug2) ||
  waterJugs(jug1, jug2, desiredVolume - Math.abs(jug1 - jug2)) ||
  waterJugs(jug1, jug2, desiredVolume - (jug1 + jug2))) {
    return true;
  } else {
    return false;
  }
};

console.log(waterJugs(3, 5, 4) === true);
// -> true
console.log(waterJugs(2, 5, 13) === true);
// -> true
console.log(true === waterJugs(4, 5, 81));
// -> true
console.log(false === waterJugs(2, 6, 5));
// -> false
console.log(false === waterJugs(2, 4, 11));
// -> false
// console.log(false === waterJugs(8, 4, 111));
// -> false

module.exports = {
waterJugs: waterJugs,
};
