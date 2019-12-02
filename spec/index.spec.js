'use strict';

var equal = require('..');
var equalReact = require('../react');
var es6equal = require('../es6');
var es6equalReact = require('../es6/react');
var assert = require('assert');

testCases(equal, 'equal - standard tests', require('./tests'));
testCases(es6equal, 'es6 equal - standard tests', require('./tests'));
testCases(es6equal, 'es6 equal - es6 tests', require('./es6tests'));

testCases(equalReact, 'equal react - standard tests', require('./tests'));
testCases(es6equalReact, 'es6 equal react - standard tests', require('./tests'));
testCases(es6equalReact, 'es6 equal react - es6 tests', require('./es6tests'));

function testCases(equalFunc, suiteName, suiteTests) {
  describe(suiteName, function() {
    suiteTests.forEach(function (suite) {
      describe(suite.description, function() {
        suite.tests.forEach(function (test) {
          (test.skip ? it.skip : it)(test.description, function() {
            assert.strictEqual(equalFunc(test.value1, test.value2), test.equal);
          });
          (test.skip ? it.skip : it)(test.description + ' (reverse arguments)', function() {
            assert.strictEqual(equalFunc(test.value2, test.value1), test.equal);
          });
        });
      });
    });
  });
}