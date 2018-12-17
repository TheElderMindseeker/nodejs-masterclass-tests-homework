/*
 * Test suite
 *
 */

// Dependencies
const assert = require('assert');
const lib = require('./../app/lib');

// Test holder
var tests = {};

// Test for getRandomNumber
tests['lib.getRandomNumber returns a number'] = done => {
  assert.doesNotThrow(() => {
    assert.equal(typeof(lib.getRandomNumber()), 'number');
    done();
  }, TypeError);
};

// Test for isPalindrome
tests['lib.isPalindrome correctly distinguishes palindrome strings'] = done => {
  assert.doesNotThrow(() => {
    assert.ok(lib.isPalindrome("aabbccbbaa"));
    assert.ok(lib.isPalindrome("23tr4rt32"));
    assert.ok(! lib.isPalindrome("ytruty"));
    done();
  }, TypeError);
};

// Test for isPalindrome with incorrect argument type
tests['lib.isPalindrome does not throw if given argument of incorrect type'] = done => {
  assert.doesNotThrow(() => {
    assert.equal(lib.isPalindrome(112343211), 'Not a string');
    done();
  }, TypeError);
};

// Test for lib.readInputFile to return file contents
tests['lib.readInputFile returns \'This is a test string\''] = done => {
  assert.doesNotThrow(() => {
    var result = lib.readInputFile();
    assert.equal(result, 'This is a test string');
    done();
  }, TypeError);
};

// Test for lib.calculateFibonacci to return correct result on given index
tests['lib.calculateFibonacci returns a correct Fibonacci tenth number = 55'] = done => {
  assert.doesNotThrow(() => {
    var result = lib.calculateFibonacci(10);
    assert.equal(typeof(result), 'number');
    assert.equal(result, 55);
    done();
  }, TypeError);
};

// Test for lib.calculateFibonacci not to throw on invalid argument type
tests['lib.calculateFibonacci should not throw given incorrect argument type'] = done => {
  assert.doesNotThrow(() => {
    var result = lib.calculateFibonacci('tenth');
    assert.equal(result, 'Invalid number argument');
    done();
  }, TypeError);
};

tests['lib.getFavouriteSongsList returns array of objects with specific fields'] = done => {
  assert.doesNotThrow(() => {
    var songsList = lib.getFavouriteSongsList();
    // Check that songsList is a non-empty array
    assert.equal(typeof(songsList), 'object');
    assert.ok(songsList instanceof Array);
    assert.ok(songsList.length > 0);

    for (var i = 0; i < songsList.length; i++) {
      // Song has title
      assert.ok(songsList[i].hasOwnProperty('title'));
      // Song has artist
      assert.ok(songsList[i].hasOwnProperty('artist'));
    }
    done();
  }, TypeError);
};

// Export tests
module.exports = tests;