'use strict';
/**
 * Find the longest palindrome in a string, ignoring spaces
**/

var longestPalindrome = function (string) {
  var longest = arguments[1] === undefined ? string[0] : arguments[1];
  var temp;
  // base case
  if (string.length <= longest.length) {
    return longest;
  }

  for (var i = 0; string.substring(i).length > longest.length; i++) {
    temp = string.substring(i).split('').reverse().join('');
    if (temp === string.substring(i)) {
      longest = temp;
    }
  }
  // recursive case
  longest = longestPalindrome(string.substring(0, string.length - 1), longest);
  return longest;
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
