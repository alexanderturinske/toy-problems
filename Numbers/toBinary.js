'use strict';
/**
 * Create a function that converts a number in base 10 to base 2
**/

var toBinary = function () {

};

console.log(toBinary(31) === '11111');
// -> '11111'
console.log(toBinary(9) === '1001');
// -> '1001'
console.log(toBinary(6) === '110');
// -> '110'
console.log(toBinary(5) === '101');
// -> '101'

module.exports = {
  toBinary: toBinary,
};
