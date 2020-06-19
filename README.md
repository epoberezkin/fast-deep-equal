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

Node.js v12.18.0:

```
fast-deep-equal x 203,774 ops/sec ±0.52% (85 runs sampled)
fast-equals x 195,949 ops/sec ±2.11% (88 runs sampled)
fast-deep-equal/es6 x 190,842 ops/sec ±0.94% (88 runs sampled)
nano-equal x 161,407 ops/sec ±0.83% (87 runs sampled)
shallow-equal-fuzzy x 119,797 ops/sec ±4.12% (85 runs sampled)
deep-equal x 96.42 ops/sec ±13.05% (37 runs sampled)
underscore.isEqual x 64,410 ops/sec ±8.80% (76 runs sampled)
util.isDeepStrictEqual x 35,406 ops/sec ±8.43% (72 runs sampled)
lodash.isEqual x 31,035 ops/sec ±8.24% (77 runs sampled)
fast-safe-stringify x 23,841 ops/sec ±1.50% (86 runs sampled)
deep-eql x 22,756 ops/sec ±14.75% (68 runs sampled)
ramda.equals x 8,796 ops/sec ±7.41% (71 runs sampled)
assert.deepStrictEqual x 174 ops/sec ±20.75% (38 runs sampled)

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
