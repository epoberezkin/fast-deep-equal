'use strict';

const tests = require('../spec/tests');
const Benchmark = require('benchmark');

const correctnessTests = [];
const genericSuite = new Benchmark.Suite;
const allSuite = new Benchmark.Suite;

const equalPackages = {
  'react-fast-compare': require('../index'),
  'react-fast-compare-object-is': require('../object-is'),
  'react-fast-compare-object-is-polyfill': require('../object-is-polyfill'),
  // 'fast-deep-equal': require('fast-deep-equal'),
  // 'lodash.isEqual': require('lodash').isEqual,
  // 'nano-equal': require('nano-equal'),
  // 'shallow-equal-fuzzy': require('shallow-equal-fuzzy')
};

for (const equalName in equalPackages) {
  const equalFunc = equalPackages[equalName];

  genericSuite.add(equalName, function() {
    for (const testSuite of tests.generic) {
      for (const test of testSuite.tests) {
        try {
          equalFunc(test.value1, test.value2);
        } catch (error) {
          // swallow errors during benchmarking. they are reported in the test section
        }
      }
    }
  });

  allSuite.add(equalName, function() {
    for (const testSuite of tests.all) {
      for (const test of testSuite.tests) {
        try {
          equalFunc(test.value1, test.value2);
        } catch (error) {
          // swallow errors during benchmarking. they are reported in the test section
        }
      }
    }
  });

  correctnessTests.push(() => console.log(equalName));
  for (const testSuite of tests.all) {
    for (const test of testSuite.tests) {
      correctnessTests.push(() => {
        try {
          if (equalFunc(test.value1, test.value2) !== test.equal)
            console.error('- different result:', equalName, testSuite.description, test.description);
        } catch(error) {
          console.error('- error:', testSuite.description, test.description, error.message);
        }
      });
    }
  }
}

const chartData = {};

console.log('\n--- speed tests: generic usage ---\n');

genericSuite
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log('  fastest: ' + this.filter('fastest').map('name'));
    chartData.categories = this.map(test => test.name);
    chartData.genericTestData = this.map(test => ({
      x: test.name,
      y: test.hz,
    }));
  })
  .run({async: false});

console.log('\n--- speed tests: generic and react ---\n');

allSuite
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log('  fastest: ' + this.filter('fastest').map('name'));
    chartData.reactAndGenericTestData = this.map(test => ({
      x: test.name,
      y: test.hz,
    }));
  })
  .run({async: false});

console.log('\n--- correctness tests: generic and react ---\n');

correctnessTests.forEach(test => test());

console.log(JSON.stringify(chartData, null, 2));
