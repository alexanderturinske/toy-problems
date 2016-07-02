'use strict';
/**
 * Description
**/

var permutations = function (nums) {

};

console.log(permutations(1, 2) === [[1, 2], [2, 1]]);
// -> [[1, 2], [2, 1]]
console.log(permutations(1, 2, 3).length === 6);
// -> 6
console.log(permutations(3, 2, 1, 0).length === 24);
// -> 24
console.log(permutations() === []);
// -> []

module.exports = {
  permutations: permutations,
};
