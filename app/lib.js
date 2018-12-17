/*
 * Various library functions and helpers
 *
 */

// Dependencies
const fs = require('fs');

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

// Read contents of input_file.txt and return them via callback
lib.readInputFile = () => {
  var data = fs.readFileSync('./app/input_file.txt');
  return data;
};

// Calculates the specified number in Fibonacci sequence
lib.calculateFibonacci = number => {
  // Validate input
  number = typeof(number) == 'number' && number % 1 === 0 ? number : false;

  if (! number) {
    return 'Invalid number argument';
  }

  // The result will be stored in secondTerm
  var firstTerm = 0, secondTerm = 1;
  var temp;

  for (var current = 1; current < number; current++) {
    temp = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = temp;
  }

  return secondTerm;
};

lib.getFavouriteSongsList = () => {
  return [
    {
      'title': 'Tri Martolod',
      'artist': 'Santiano'
    },
    {
      'title': 'The Fifth Angel',
      'artist': 'Beast in Black'
    },
    {
      'title': 'Demons Are a Girl\'s Best Friend',
      'artist': 'Powerwolf'
    }
  ];
};

// Export
module.exports = lib;