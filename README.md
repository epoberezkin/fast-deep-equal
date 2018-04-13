# react-fast-compare

The fastest deep equal comparison for React, perfect for `shouldComponentUpdate`, also really fast at general-purpose deep comparison. This is a fork of the brilliant [fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal) with some extra handling for React.

[![Travis Status][trav_img]][trav_site]
[![AppVeyor Status][appveyor_img]][appveyor_site]
[![npm version][npm_img]][npm_site]

<img src="https://i.imgur.com/KLUWQla.png" alt="chart" width="550"/>

(Check out the [benchmarking details](#benchmarking).)

## Install

```bash
yarn add react-fast-compare
# or
npm install react-fast-compare
```


## Highlights

- ES5 compatible; works in node.js (0.10+) and browsers (IE9+)
- deeply compares any value (besides objects with circular references)
- handles React-specific circular references, like elements
- checks equality Date and RegExp objects
- should be just as fast as [fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal) for general use, and faster for React use

## Usage

```jsx
const isEqual = require('react-fast-compare');

// general usage
console.log(isEqual({foo: 'bar'}, {foo: 'bar'})); // true

// react usage
class ExpensiveRenderer extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }
  render() {
    // ...
  }
}
```

## Benchmarking

All tests carried out locally on a Macbook. The absolute values are much less important than the relative differences between packages.

Benchmarking source can be found [here](https://github.com/FormidableLabs/react-fast-compare/blob/master/spec/tests.js). Each "operation" consists of running all relevant tests. The React benchmark uses both the generic tests and the react tests; these runs will be slower simply because there are more tests in each operation.

### Generic Data

```
react-fast-compare x 161,872 ops/sec ±1.18% (82 runs sampled)
fast-deep-equal x 159,889 ops/sec ±1.62% (85 runs sampled)
lodash.isEqual x 30,750 ops/sec ±2.02% (86 runs sampled)
nano-equal x 35,608 ops/sec ±1.55% (86 runs sampled)
shallow-equal-fuzzy x 94,141 ops/sec ±1.80% (89 runs sampled)
  fastest: react-fast-compare,fast-deep-equal
```

`react-fast-compare` and `fast-deep-equal` should be the same speed for these tests; any difference is just noise. `react-fast-compare` won't be faster than `fast-deep-equal`, because it's based on it.

### React and Generic Data

```
react-fast-compare x 150,667 ops/sec ±1.86% (83 runs sampled)
fast-deep-equal x 510 ops/sec ±1.67% (77 runs sampled)
lodash.isEqual x 25,760 ops/sec ±1.63% (83 runs sampled)
nano-equal x 629 ops/sec ±2.43% (80 runs sampled)
shallow-equal-fuzzy x 454 ops/sec ±1.42% (79 runs sampled)
  fastest: react-fast-compare
```

Three of these packages cannot handle comparing React elements (which are circular): `fast-deep-equal`, `nano-equal`, and `shallow-equal-fuzzy`.

### Running Benchmarks

```bash
yarn install
yarn run benchmark
```


## License

[MIT](https://github.com/FormidableLabs/react-fast-compare/blob/readme/LICENSE)

[trav_img]: https://api.travis-ci.org/FormidableLabs/react-fast-compare.svg
[trav_site]: https://travis-ci.org/FormidableLabs/react-fast-compare
[cov_img]: https://img.shields.io/coveralls/FormidableLabs/react-fast-compare.svg
[cov_site]: https://coveralls.io/r/FormidableLabs/react-fast-compare
[npm_img]: https://badge.fury.io/js/react-fast-compare.svg
[npm_site]: http://badge.fury.io/js/react-fast-compare
[appveyor_img]: https://ci.appveyor.com/api/projects/status/github/formidablelabs/react-fast-compare?branch=master&svg=true
[appveyor_site]: https://ci.appveyor.com/project/FormidableLabs/react-fast-compare
