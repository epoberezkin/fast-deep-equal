# fast-deep-equal
The fastest deep equal

[![Build Status](https://travis-ci.org/epoberezkin/fast-deep-equal.svg?branch=master)](https://travis-ci.org/epoberezkin/fast-deep-equal)
[![npm](https://img.shields.io/npm/v/fast-deep-equal.svg)](https://www.npmjs.com/package/fast-deep-equal)
[![npm](https://img.shields.io/npm/v/fast-deep-equal/beta.svg)](https://www.npmjs.com/package/fast-deep-equal)
[![Coverage Status](https://coveralls.io/repos/github/epoberezkin/fast-deep-equal/badge.svg?branch=master)](https://coveralls.io/github/epoberezkin/fast-deep-equal?branch=master)


This readme is for pre-release v3 with ES6 Map, Set and Typed arrays support.

See branch [v2](https://github.com/epoberezkin/fast-deep-equal/tree/v2) for the main version.


## Install

To install v3 pre-release with ES6 Map, Set and Typed arrays support

```bash
npm install fast-deep-equal@beta
```

To install [v2](https://github.com/epoberezkin/fast-deep-equal/tree/v2)

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
fast-deep-equal x 263,304 ops/sec ±0.57% (86 runs sampled)
fast-deep-equal/es6 x 210,257 ops/sec ±0.34% (89 runs sampled)
fast-equals x 233,740 ops/sec ±0.40% (91 runs sampled)
nano-equal x 187,624 ops/sec ±0.30% (93 runs sampled)
shallow-equal-fuzzy x 139,305 ops/sec ±0.37% (91 runs sampled)
underscore.isEqual x 72,636 ops/sec ±0.26% (89 runs sampled)
lodash.isEqual x 37,684 ops/sec ±1.14% (91 runs sampled)
deep-equal x 2,390 ops/sec ±0.36% (88 runs sampled)
deep-eql x 36,353 ops/sec ±0.55% (90 runs sampled)
ramda.equals x 12,169 ops/sec ±0.39% (92 runs sampled)
util.isDeepStrictEqual x 46,720 ops/sec ±0.38% (92 runs sampled)
assert.deepStrictEqual x 461 ops/sec ±0.72% (86 runs sampled)

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
