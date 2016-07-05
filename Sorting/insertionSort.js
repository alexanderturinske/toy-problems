'use strict';
/**
 * Implement an insertion sort
**/

const insertionSort = () => {

};


console.log(insertionSort([]) + ' is ' + [] + ' sorted');
console.log(insertionSort([0]) + ' is ' + [0] + ' sorted');
console.log(insertionSort([1, 2, 3, 4, 5]) + ' is ' + [1, 2, 3, 4, 5] + ' sorted');
console.log(insertionSort([5, 2, 1, 5, 0]) + ' is ' + [5, 2, 1, 5, 0] + ' sorted');
console.log(insertionSort([5, 2, 1, 4]) + ' is ' + [5, 2, 1, 4] + ' sorted');

module.exports = {
  insertionSort,
};
