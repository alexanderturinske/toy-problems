'use strict';
/**
 * Take a string equation (E.g., ‘5+4*3-8’) and calculate the result and write a test
 help: abstract syntax trees, recursive, eval
**/

const mathString = (string) => {

};

console.log(mathString('5+4*3-8') === 9);
// -> 9
console.log(mathString('12*12/2+8') === 80);
// -> 80
console.log(mathString('12+12/2*8') === 96);
// -> 96
console.log(mathString('1000*9/3000') === 3);
// -> 3

module.exports = {
  mathString,
};
