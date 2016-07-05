'use strict';
/**
 * Implement an insertion sort
**/

const insertionSort = (array) => {
  for (var i = 1; i < array.length; i++) {
    // save the value you want to insert
    var val = array[i];
    // save the insertionLocation
    var insertionLocation = i;
    // while the insertionLocation location is greater than 0 and val is larger than the next value
    while (insertionLocation > 0 && val < array[insertionLocation - 1]) {
      // move the previous value to the insertionLocation
      array[insertionLocation] = array[insertionLocation - 1];
      // decrement the insertionLocation
      insertionLocation -= 1;
    }
    // insert the insertionLocation
    array[insertionLocation] = val;
  }
  return array;
};


console.log(insertionSort([]) + ' is ' + [] + ' sorted');
console.log(insertionSort([0]) + ' is ' + [0] + ' sorted');
console.log(insertionSort([1, 2, 3, 4, 5]) + ' is ' + [1, 2, 3, 4, 5] + ' sorted');
console.log(insertionSort([5, 2, 1, 5, 0]) + ' is ' + [5, 2, 1, 5, 0] + ' sorted');
console.log(insertionSort([5, 2, 1, 4]) + ' is ' + [5, 2, 1, 4] + ' sorted');

module.exports = {
  insertionSort,
};
