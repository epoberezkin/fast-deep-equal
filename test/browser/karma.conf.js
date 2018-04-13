'use strict';

const path = require('path');
const CORE_JS_ROOT = path.dirname(require.resolve('core-js/package.json'));

module.exports = function(config) {
  config.set({
    basePath: '../..',
    frameworks: ['mocha'],
    files: [
      // Polyfills for IE9 in React 16.
      require.resolve('core-js/es6/map'),
      require.resolve('core-js/es6/set'),
      // Re-use node tests.
      'test/node/**/*.spec.js'
    ],
    preprocessors: {
      [path.join(CORE_JS_ROOT, 'es6/**/*.js')]: ['webpack'],
      'test/**/*.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      devtool: false,
      module: {
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            include: path.resolve(__dirname, '../node/'),
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          }
        ]
      }
    },
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    // Run a customized instance of headless chrome for dev + Travis CI.
    browsers: ['ChromeHeadlessCustom'],
    customLaunchers: {
      ChromeHeadlessCustom: {
        base: 'ChromeHeadless',
        // --no-sandbox for https://github.com/travis-ci/docs-travis-ci-com/pull/1671/files
        flags: ['--no-sandbox']
      }
    },
    reporters: ['mocha'/* TODO, 'coverage'*/],
    browserNoActivityTimeout: 60000,
    plugins: [
      'karma-chrome-launcher',
      //'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack'
    ],
    coverageReporter: {
      type: 'text'
    },
    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },
    captureTimeout: 100000,
    singleRun: true
  });
};