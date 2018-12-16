/*
 * Test runner
 *
 */

// Dependencies
const assert = require('assert');
const util = require('util');
const debug = util.debuglog('index');
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

// Test counter
function countTests() {
  var counter = 0;
  for (var key in tests) {
    if (tests.hasOwnProperty(key)) {
      ++counter;
    }
  }
  return counter;
}

function showTestResults(limit, successes, errors) {
  console.log('------------BEGIN TEST RESULTS------------');
  console.log('');
  console.log(`Tests total: ${limit}`);
  console.log('\x1b[32mPassed:\x1b[0m ', successes);
  console.log('\x1b[31mFailed:\x1b[0m ', limit - successes);

  if (errors.length > 0) {
    console.log('');
    console.log('------------BEGIN TEST DETAILS------------');
    console.log('');

    for (var i = 0; i < errors.length; i++) {
      var error = errors[i];

      console.log('\x1b[31m%s\x1b[0m', error.test);
      console.log('');
      console.log(error.error);
      console.log('');
    }

    console.log('');
    console.log('------------END TEST DETAILS------------');
  }

  console.log('');
  console.log('------------END TEST RESULTS------------');
}

// Test runner
function runTests() {
  var successes = 0;
  var counter = 0;
  var limit = countTests();
  var errors = [];
  var test;

  for (var key in tests) {
    if (tests.hasOwnProperty(key)) {
      try {
        test = tests[key];
        test(() => {
          // Test executed successfully
          ++successes;
          ++counter;
        });
      } catch (e) {
        // Just in case something goes wrong and we need to debug
        debug(e);

        // Test raised Assertion Error
        ++counter;

        errors.push({
          'test': key,
          'error': e
        });
      }

      if (counter === limit) {
        showTestResults(limit, successes, errors);
      }
    }
  }
}

// Run only if invoked directly
if (require.main === module) {
  runTests();
}