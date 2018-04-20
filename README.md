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

```
fast-deep-equal x 217,587 ops/sec ±0.81% (85 runs sampled)
nano-equal x 208,776 ops/sec ±0.84% (87 runs sampled)
shallow-equal-fuzzy x 195,849 ops/sec ±1.59% (89 runs sampled)
underscore.isEqual x 123,740 ops/sec ±1.34% (86 runs sampled)
lodash.isEqual x 41,598 ops/sec ±2.64% (84 runs sampled)
deep-equal x 47,966 ops/sec ±0.40% (89 runs sampled)
deep-eql x 26,891 ops/sec ±0.80% (88 runs sampled)
assert.deepStrictEqual x 1,652 ops/sec ±1.18% (88 runs sampled)
The fastest is fast-deep-equal
```

To run benchmark (requires node.js 6+):

```bash
npm install
node benchmark
```


## License

[MIT](https://github.com/epoberezkin/fast-deep-equal/blob/master/LICENSE)
