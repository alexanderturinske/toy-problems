/*

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.

*/

var twoArrayIntersection = function (array1, array2) {
  var output = [];
  var long = array1.length >= array2.length ? array1 : array2;
  var short = array1.length <= array2.length ? array1 : array2;
  long.forEach(function (e) {
    if (short.indexOf(e) >= 0) {
      output.push(e);
    }
  });
  return output;
};

// Empty arrays
console.log(twoArrayIntersection([], []));
//-> []

// Same arrays
console.log(twoArrayIntersection([1], [1]));
//-> [1]

// No intersection Case
console.log(twoArrayIntersection([4], [1, 2]));
//-> []

// General Case
console.log(twoArrayIntersection([1], [1, 2]));
//-> [1]

module.exports = {
   twoArrayIntersection: twoArrayIntersection,
};
