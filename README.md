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

Node.js v12.6.0:

```
| Name                   |  ops/sec | ±       | runs sampled  |
|------------------------|----------|---------|---------------|
| fast-deep-equal        | 261,950  | ±0.52%  | 89            |
| fast-deep-equal/es6    | 212,991  | ±0.34%  | 92            |
| fast-equals            | 230,957  | ±0.83%  | 85            |
| nano-equal             | 187,995  | ±0.53%  | 88            |
| shallow-equal-fuzzy    | 138,302  | ±0.49%  | 90            |
| underscore.isEqual     | 74,423   | ±0.38%  | 89            |
| lodash.isEqual         | 36,637   | ±0.72%  | 90            |
| deep-equal             | 2,310    | ±0.37%  | 90            |
| deep-eql               | 35,312   | ±0.67%  | 91            |
| ramda.equals           | 12,054   | ±0.40%  | 91            |
| util.isDeepStrictEqual | 46,440   | ±0.43%  | 90            |
| assert.deepStrictEqual | 456      | ±0.71%  | 88            |

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
