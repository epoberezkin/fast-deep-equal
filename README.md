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
fast-deep-equal x 327,560 ops/sec ±0.53% (86 runs sampled)
nano-equal x 232,335 ops/sec ±0.74% (87 runs sampled)
shallow-equal-fuzzy x 163,586 ops/sec ±0.61% (86 runs sampled)
underscore.isEqual x 86,656 ops/sec ±0.58% (90 runs sampled)
lodash.isEqual x 48,047 ops/sec ±0.66% (88 runs sampled)
deep-equal x 73,317 ops/sec ±0.56% (87 runs sampled)
deep-eql x 42,667 ops/sec ±0.72% (88 runs sampled)
assert.deepStrictEqual x 581 ops/sec ±0.67% (84 runs sampled)
ramda.equals x 14,915 ops/sec ±0.74% (89 runs sampled)

The fastest is fast-deep-equal
```

To run benchmark (requires node.js 6+):

```bash
npm install
node benchmark
```


## License

[MIT](https://github.com/epoberezkin/fast-deep-equal/blob/master/LICENSE)
