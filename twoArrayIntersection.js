/*

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.

*/

var twoArrayIntersection = function (array1, array2) {
  var long = array1.length >= array2.length ? array1 : array2;
  var short = array1.length <= array2.length ? array1 : array2;
  return long.map(function(e) {
    if (short.indedOf(e) < 0) {
      return e;
    } else {
      return;
    }
  });
};

module.exports = {
   twoArrayIntersection: twoArrayIntersection,
};
