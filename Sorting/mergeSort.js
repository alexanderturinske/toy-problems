'use strict';
/**
 * Implement a merge sort
**/

const mergeSort = (array) => {

};


console.log(mergeSort([]) + ' is ' + [] + ' sorted');
console.log(mergeSort([0]) + ' is ' + [0] + ' sorted');
console.log(mergeSort([1, 2, 3, 4, 5]) + ' is ' + [1, 2, 3, 4, 5] + ' sorted');
console.log(mergeSort([5, 2, 1, 5, 0]) + ' is ' + [5, 2, 1, 5, 0] + ' sorted');
console.log(mergeSort([5, 2, 1, 4]) + ' is ' + [5, 2, 1, 4] + ' sorted');

module.exports = {
  mergeSort,
};
