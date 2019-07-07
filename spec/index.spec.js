'use strict';

var equal = require('..');
var es6equal = require('../es6');
var es6cyclesEqual = require('../es6cycles');
var assert = require('assert');

testCases(equal, 'equal - standard tests', require('./tests'));
testCases(es6equal, 'es6 equal - standard tests', require('./tests'));
testCases(es6equal, 'es6 equal - es6 tests', require('./es6tests'));
testCases(es6cyclesEqual, 'es6 cycles equal - standard tests', require('./tests'));
testCases(es6cyclesEqual, 'es6 cycles equal - es6 tests', require('./es6tests'));
testCases(es6cyclesEqual, 'es6 cycles equal - cycle tests', require('./cycle_tests'));

function testCases(equalFunc, suiteName, suiteTests) {
  describe(suiteName, function() {
    suiteTests.forEach(function (suite) {
      describe(suite.description, function() {
        suite.tests.forEach(function (test) {
          it(test.description, function() {
            assert.strictEqual(equalFunc(test.value1, test.value2), test.equal);
          });
        });
      });
    });
  });
}