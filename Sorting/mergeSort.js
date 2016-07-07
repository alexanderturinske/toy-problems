'use strict';
/**
 * Implement a merge sort
**/

const mergeSort = (array) => {
  // base case
  if (array.length <= 1) {
    return array;
  }
  // recursive case
  const front = mergeSort(array.slice(0, array.length / 2));
  const back = mergeSort(array.slice(array.length / 2));
  // combine arrays
  const sorted = [];
  while (front.length || back.length) {
    if (front[0] !== undefined && back[0] !== undefined) {
      if (front[0] < back[0]) {
        sorted.push(front.shift());
      } else {
        sorted.push(back.shift());
      }
    } else if (front[0] !== undefined) {
      sorted.push(front.shift());
    } else if (back[0] !== undefined) {
      sorted.push(back.shift());
    }
  }
  return sorted;
};


console.log(mergeSort([]) + ' is ' + [] + ' sorted');
console.log(mergeSort([0]) + ' is ' + [0] + ' sorted');
console.log(mergeSort([1, 2, 3, 4, 5]) + ' is ' + [1, 2, 3, 4, 5] + ' sorted');
console.log(mergeSort([5, 2, 1, 5, 0]) + ' is ' + [5, 2, 1, 5, 0] + ' sorted');
console.log(mergeSort([5, 2, 1, 4]) + ' is ' + [5, 2, 1, 4] + ' sorted');

module.exports = {
  mergeSort,
};
