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
- works in node.js (8+) and browsers (IE9+)
- checks equality of Date and RegExp objects by value.

ES6 equal (`require('fast-deep-equal/es6')`) also supports:
- Maps
- Sets
- Typed arrays


## Usage

```javascript
var equal = require('fast-deep-equal');
console.log(equal({foo: 'bar'}, {foo: 'bar'})); // true
```

To support ES6 Maps, Sets and Typed arrays equality use:

```javascript
var equal = require('fast-deep-equal/es6');
console.log(equal(Int16Array([1, 2]), Int16Array([1, 2]))); // true
```


## Performance benchmark

Node.js v12.6.0:

```
fast-deep-equal x 325,485 ops/sec ±0.57% (86 runs sampled)
fast-deep-equal/es6 x 261,338 ops/sec ±0.45% (89 runs sampled)
nano-equal x 231,064 ops/sec ±0.62% (88 runs sampled)
shallow-equal-fuzzy x 164,828 ops/sec ±0.87% (88 runs sampled)
underscore.isEqual x 91,247 ops/sec ±0.56% (88 runs sampled)
lodash.isEqual x 48,000 ops/sec ±0.48% (86 runs sampled)
deep-equal x 73,699 ops/sec ±0.55% (86 runs sampled)
deep-eql x 42,804 ops/sec ±0.45% (87 runs sampled)
ramda.equals x 15,119 ops/sec ±0.49% (87 runs sampled)
util.isDeepStrictEqual x 58,458 ops/sec ±0.56% (89 runs sampled)
assert.deepStrictEqual x 583 ops/sec ±0.47% (87 runs sampled)

The fastest is fast-deep-equal
```

To run benchmark (requires node.js 6+):

```bash
npm install
npm run build
node benchmark
```


## License

[MIT](https://github.com/epoberezkin/fast-deep-equal/blob/master/LICENSE)
