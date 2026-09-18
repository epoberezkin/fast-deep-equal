'use strict';

var assert = require('assert');

['../index', '../react', '../es6', '../es6/react'].forEach(function (entry) {
  var equal = require(entry);

  describe(entry + ' array kind regression', function () {
    function arrayLike(values, constructor) {
      var result = {};
      values.forEach(function (value, index) { result[index] = value; });
      Object.defineProperties(result, {
        constructor: {value: constructor},
        length: {value: values.length}
      });
      return result;
    }

    it('rejects the array-like object from issue 132 in both orders', function () {
      var array = ['a', 'b'];
      var object = {0: 'a', 1: 'b', 2: 'c', length: 2, constructor: Array};
      assert.strictEqual(equal(array, object), false);
      assert.strictEqual(equal(object, array), false);
    });

    it('rejects an object with non-enumerable length and constructor', function () {
      var array = ['a', 'b'];
      var object = arrayLike(array, Array);
      assert.strictEqual(equal(array, object), false);
      assert.strictEqual(equal(object, array), false);
    });

    it('rejects empty array-like objects in both orders', function () {
      assert.strictEqual(equal([], arrayLike([], Array)), false);
      assert.strictEqual(equal(arrayLike([], Array), []), false);
    });

    it('does not trust an overwritten array constructor', function () {
      var array = ['a'];
      Object.defineProperty(array, 'constructor', {value: Object});
      var object = arrayLike(array, Object);
      assert.strictEqual(equal(array, object), false);
      assert.strictEqual(equal(object, array), false);
    });

    it('checks array kind within nested objects', function () {
      assert.strictEqual(equal({rows: ['a']}, {rows: arrayLike(['a'], Array)}), false);
      assert.strictEqual(equal({rows: arrayLike(['a'], Array)}, {rows: ['a']}), false);
    });

    it('preserves normal array comparison', function () {
      assert.strictEqual(equal([1, {name: 'a'}], [1, {name: 'a'}]), true);
      assert.strictEqual(equal([1, 2], [1, 3]), false);
      assert.strictEqual(equal([1], [1, 2]), false);
    });

    it('preserves the existing treatment of extra array properties', function () {
      var array = ['a'];
      array.note = 'not part of indexed array equality';
      assert.strictEqual(equal(array, ['a']), true);
      assert.strictEqual(equal(['a'], array), true);
    });

    it('preserves ordinary object comparison and same-reference shortcut', function () {
      var object = arrayLike(['a'], Array);
      assert.strictEqual(equal(object, object), true);
      assert.strictEqual(equal({a: 1}, {a: 1}), true);
      assert.strictEqual(equal({a: 1}, {a: 2}), false);
    });
  });
});
