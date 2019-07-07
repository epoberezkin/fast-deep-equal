# fast-deep-equal
The fastest deep equal

[![Build Status](https://travis-ci.org/epoberezkin/fast-deep-equal.svg?branch=master)](https://travis-ci.org/epoberezkin/fast-deep-equal)
[![npm version](https://badge.fury.io/js/fast-deep-equal.svg)](http://badge.fury.io/js/fast-deep-equal)
[![Coverage Status](https://coveralls.io/repos/github/epoberezkin/fast-deep-equal/badge.svg?branch=master)](https://coveralls.io/github/epoberezkin/fast-deep-equal?branch=master)


## Install

```bash
npm install fast-deep-equal
```


## Features

- ES5 compatible
- works in node.js (0.10+) and browsers (IE9+)
- checks equality of Date and RegExp objects by value.


## Usage

```javascript
var equal = require('fast-deep-equal');
console.log(equal({foo: 'bar'}, {foo: 'bar'})); // true
```


## Performance benchmark

Node.js v12.6.0:

```
fast-deep-equal x 329,192 ops/sec ±0.69% (88 runs sampled)
nano-equal x 237,806 ops/sec ±0.65% (88 runs sampled)
shallow-equal-fuzzy x 166,873 ops/sec ±0.67% (87 runs sampled)
underscore.isEqual x 92,258 ops/sec ±0.64% (87 runs sampled)
deep-equal x 73,243 ops/sec ±0.76% (85 runs sampled)
lodash.isEqual x 48,218 ops/sec ±0.71% (87 runs sampled)
deep-eql x 43,685 ops/sec ±0.65% (86 runs sampled)
ramda.equals x 15,343 ops/sec ±0.61% (88 runs sampled)
util.isDeepStrictEqual x 59,709 ops/sec ±0.54% (87 runs sampled)
assert.deepStrictEqual x 587 ops/sec ±0.54% (85 runs sampled)

The fastest is fast-deep-equal
```

To run benchmark (requires node.js 6+):

```bash
npm install
node benchmark
```


## License

[MIT](https://github.com/epoberezkin/fast-deep-equal/blob/master/LICENSE)
