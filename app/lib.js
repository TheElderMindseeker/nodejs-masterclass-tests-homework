/*
 * Various library functions and helpers
 *
 */

// Dependencies

// Container object
var lib = {};

// Simple function generating a single random number
lib.getRandomNumber = () => {
  return Math.random();
};

lib.isPalindrome = str => {
  // Validate input
  str = typeof(str) == 'string' && str.length > 0 ? str : false;

  if (! str) {
    return 'Not a string';
  }

  var palindrome = true;
  for (var i = 0; i < str.length && palindrome; i++) {
    if (str[i] !== str[str.length - i - 1]) palindrome = false;
  }
  return palindrome;
};

// Export
module.exports = lib;