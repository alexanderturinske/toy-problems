'use strict';
/**
 * Find the longest palindrome in a string, ignoring spaces
**/

var longestPalindrome = function (string) {

};

console.log(longestPalindrome('doggod') === 'doggod');
// -> 'doggod'
console.log(longestPalindrome(' race car k') === ' ');
// -> 'race car'
console.log(longestPalindrome('ketchup') === 'k');
// -> k
console.log(longestPalindrome(' dog god') === 'dog god');
// -> 'dog god'
console.log(longestPalindrome(' franarf?') === 'franarf');
// -> 'franarf'

module.exports = {
  longestPalindrome: longestPalindrome,
};
