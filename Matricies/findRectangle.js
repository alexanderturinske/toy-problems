'use strict';
/**
 * In a matrix full of 1s with a rectangle of 0s in the middle, find the length and width
 * and output it as a string
**/

const findRectangle = (matrix) => {

};

console.log(findRectangle([[1, 1, 1], [1, 0, 1], [1, 1, 1]]) === '1,1');
// -> '1,1'
console.log(findRectangle([[1, 1, 1, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 1]]) === '2,2');
// -> '2,2'
console.log(findRectangle([[1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1]]) === '4,2');
// -> '4,2'
console.log(findRectangle([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]) === '0,0');
// -> '0,0'

module.exports = {
  findRectangle,
};
