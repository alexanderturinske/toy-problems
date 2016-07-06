'use strict';
/**
   Write a function that converts a number to hex
   Example
   (7).toString(16)
   (10).toString(16)
**/

var hexConversion = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '10': 'a',
  '11': 'b',
  '12': 'c',
  '13': 'd',
  '14': 'e',
  '15': 'f',
};

const toHex = (n) => {
  let num = n;
  const answer = [];
  let power = 0;
  // find which power it goes until
  while (n % (Math.pow(16, power) * 16) !== n) {
    power++;
  }
  // fill out each power place
  for (power; power >= 0; power--) {
    if (num === 0) {
      answer.push('0');
    } else {
      answer.push(Math.floor(num / Math.pow(16, power)));
      num = num % Math.pow(16, power);
    }
  }
  // return the converted elements of the array as a string
  return answer.map(e => hexConversion[e]).join('');
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