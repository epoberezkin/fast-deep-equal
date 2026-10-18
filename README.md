# fast-deep-equal
The fastest deep equal with ES6 Map, Set and Typed arrays support.

[![Build Status](https://travis-ci.org/epoberezkin/fast-deep-equal.svg?branch=master)](https://travis-ci.org/epoberezkin/fast-deep-equal)
[![npm](https://img.shields.io/npm/v/fast-deep-equal.svg)](https://www.npmjs.com/package/fast-deep-equal)
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

To use with React (avoiding the traversal of React elements' _owner
property that contains circular references and is not needed when
comparing the elements - borrowed from [react-fast-compare](https://github.com/FormidableLabs/react-fast-compare)):

```javascript
var equal = require('fast-deep-equal/react');
var equal = require('fast-deep-equal/es6/react');
```


## Performance benchmark

Node.js v24.19.0:

```
fast-deep-equal x 833,120 ops/sec ±0.23% (98 runs sampled)
fast-deep-equal/es6 x 760,375 ops/sec ±0.30% (98 runs sampled)
fast-equals x 805,406 ops/sec ±0.21% (95 runs sampled)
nano-equal x 486,658 ops/sec ±0.55% (99 runs sampled)
shallow-equal-fuzzy x 425,674 ops/sec ±0.58% (98 runs sampled)
underscore.isEqual x 236,014 ops/sec ±0.19% (101 runs sampled)
lodash.isEqual x 145,884 ops/sec ±1.03% (96 runs sampled)
deep-equal x 325 ops/sec ±0.41% (85 runs sampled)
ramda.equals x 51,509 ops/sec ±0.35% (99 runs sampled)
util.isDeepStrictEqual x 260,454 ops/sec ±0.38% (96 runs sampled)
assert.deepStrictEqual x 2,665 ops/sec ±0.41% (94 runs sampled)

The fastest is fast-deep-equal
```

To run benchmark (requires node.js 6+):

```bash
npm run benchmark
```

__Please note__: this benchmark runs against the available test cases. To choose the most performant library for your application, it is recommended to benchmark against your data and to NOT expect this benchmark to reflect the performance difference in your application.


## Enterprise support

fast-deep-equal package is a part of [Tidelift enterprise subscription](https://tidelift.com/subscription/pkg/npm-fast-deep-equal?utm_source=npm-fast-deep-equal&utm_medium=referral&utm_campaign=enterprise&utm_term=repo) - it provides a centralised commercial support to open-source software users, in addition to the support provided by software maintainers.


## Security contact

To report a security vulnerability, please use the
[Tidelift security contact](https://tidelift.com/security).
Tidelift will coordinate the fix and disclosure. Please do NOT report security vulnerability via GitHub issues.


## License

[MIT](https://github.com/epoberezkin/fast-deep-equal/blob/master/LICENSE)
