'use strict';

var assert = require('assert');
var sinon = require('sinon');

var equal = require('../..');
var tests = require('./tests');

describe('basics', function() {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(console, 'warn');
  });

  afterEach(() => {
    sandbox.restore();
  });

  tests.all.forEach(function (suite) {
    describe(suite.description, function() {
      suite.tests.forEach(function (test) {
        it(test.description, function() {
          assert.strictEqual(equal(test.value1, test.value2), test.equal);
        });
      });
    });
  });
});
