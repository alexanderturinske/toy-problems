'use strict';
/**
   Write a function that converts a number to hex
   Example
   (7).toString(16)
   (10).toString(16)
**/

const toHex = (n) => {

};

console.log(toHex(10) === 'a');
// -> 'a'
console.log(toHex(256) === '100');
// -> '100'
console.log(toHex(20) === '14');
// -> '14'
console.log(toHex(15) === 'f');
// -> 'f'

module.exports = {
  toHex,
};