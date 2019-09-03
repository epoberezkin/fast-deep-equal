'use strict';

var equal = require('..');
var es6equal = require('../es6');
var assert = require('assert');

testCases(equal, 'equal - standard tests', require('./tests'));
testCases(es6equal, 'es6 equal - standard tests', require('./tests'));
testCases(es6equal, 'es6 equal - es6 tests', require('./es6tests'));

function testCases(equalFunc, suiteName, suiteTests) {
  describe(suiteName, function() {
    suiteTests.forEach(function (suite) {
      describe(suite.description, function() {
        suite.tests.forEach(function (test) {
          (test.skip ? it.skip : it)(test.description, function() {
            assert.strictEqual(equalFunc(test.value1, test.value2), test.equal);
          });
        });
      });
    });
  });
}