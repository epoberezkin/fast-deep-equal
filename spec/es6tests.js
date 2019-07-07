'use strict';

class MyMap extends Map {}

module.exports = [
  {
    description: 'Maps',
    tests: [
      {
        description: 'empty maps are equal',
        value1: new Map,
        value2: new Map,
        equal: true
      },
      {
        description: 'empty maps of different class are not equal',
        value1: new Map,
        value2: new MyMap,
        equal: false
      },
      {
        description: 'equal maps (same key "order")',
        value1: map({a: 1, b: '2'}),
        value2: map({a: 1, b: '2'}),
        equal: true
      },
      {
        description: 'not equal maps (same key "order" - instances of different classes)',
        value1: map({a: 1, b: '2'}),
        value2: myMap({a: 1, b: '2'}),
        equal: false
      },
      {
        description: 'equal Maps (different key "order")',
        value1: map({a: 1, b: '2'}),
        value2: map({b: '2', a: 1}),
        equal: true
      },
      {
        description: 'equal Maps (different key "order" - instances of the same subclass)',
        value1: myMap({a: 1, b: '2'}),
        value2: myMap({b: '2', a: 1}),
        equal: true
      },
      {
        description: 'not equal maps (extra key)',
        value1: map({a: 1, b: '2'}),
        value2: map({a: 1, b: '2', c: []}),
        equal: false
      },
      {
        description: 'not equal maps (different key value)',
        value1: map({a: 1, b: '2', c: 3}),
        value2: map({a: 1, b: '2', c: 4}),
        equal: false
      },
      {
        description: 'not equal objects (different keys)',
        value1: map({a: 1, b: '2', c: 3}),
        value2: map({a: 1, b: '2', d: 3}),
        equal: false
      },
      {
        description: 'equal maps (same sub-keys)',
        value1: map({ a: [ map({ b: 'c' }) ] }),
        value2: map({ a: [ map({ b: 'c' }) ] }),
        equal: true
      },
      {
        description: 'not equal maps (different sub-key value)',
        value1: map({ a: [ map({ b: 'c' }) ] }),
        value2: map({ a: [ map({ b: 'd' }) ] }),
        equal: false
      },
      {
        description: 'not equal maps (different sub-key)',
        value1: map({ a: [ map({ b: 'c' }) ] }),
        value2: map({ a: [ map({ c: 'c' }) ] }),
        equal: false
      },
      {
        description: 'empty map and empty object are not equal',
        value1: {},
        value2: new Map,
        equal: false
      },
      {
        description: 'map with extra undefined key is not equal #1',
        value1: map({}),
        value2: map({foo: undefined}),
        equal: false
      },
      {
        description: 'map with extra undefined key is not equal #2',
        value1: map({foo: undefined}),
        value2: map({}),
        equal: false
      },
      {
        description: 'maps with extra undefined keys are not equal #3',
        value1: map({foo: undefined}),
        value2: map({bar: undefined}),
        equal: false
      },
      {
        description: 'null and empty map are not equal',
        value1: null,
        value2: new Map,
        equal: false
      },
      {
        description: 'undefined and empty map are not equal',
        value1: undefined,
        value2: new Map,
        equal: false
      }
    ]
  // },

  // {
  //   description: 'arrays',
  //   tests: [
  //     {
  //       description: 'two empty arrays are equal',
  //       value1: [],
  //       value2: [],
  //       equal: true
  //     },
  //     {
  //       description: 'equal arrays',
  //       value1: [1, 2, 3],
  //       value2: [1, 2, 3],
  //       equal: true
  //     },
  //     {
  //       description: 'not equal arrays (different item)',
  //       value1: [1, 2, 3],
  //       value2: [1, 2, 4],
  //       equal: false
  //     },
  //     {
  //       description: 'not equal arrays (different length)',
  //       value1: [1, 2, 3],
  //       value2: [1, 2],
  //       equal: false
  //     },
  //     {
  //       description: 'equal arrays of objects',
  //       value1: [{a: 'a'}, {b: 'b'}],
  //       value2: [{a: 'a'}, {b: 'b'}],
  //       equal: true
  //     },
  //     {
  //       description: 'not equal arrays of objects',
  //       value1: [{a: 'a'}, {b: 'b'}],
  //       value2: [{a: 'a'}, {b: 'c'}],
  //       equal: false
  //     },
  //     {
  //       description: 'pseudo array and equivalent array are not equal',
  //       value1: {'0': 0, '1': 1, length: 2},
  //       value2: [0, 1],
  //       equal: false
  //     }
  //   ]
  // },
  // {
  //   description: 'Date objects',
  //   tests: [
  //     {
  //       description: 'equal date objects',
  //       value1: new Date('2017-06-16T21:36:48.362Z'),
  //       value2: new Date('2017-06-16T21:36:48.362Z'),
  //       equal: true
  //     },
  //     {
  //       description: 'not equal date objects',
  //       value1: new Date('2017-06-16T21:36:48.362Z'),
  //       value2: new Date('2017-01-01T00:00:00.000Z'),
  //       equal: false
  //     },
  //     {
  //       description: 'date and string are not equal',
  //       value1: new Date('2017-06-16T21:36:48.362Z'),
  //       value2: '2017-06-16T21:36:48.362Z',
  //       equal: false
  //     },
  //     {
  //       description: 'date and object are not equal',
  //       value1: new Date('2017-06-16T21:36:48.362Z'),
  //       value2: {},
  //       equal: false
  //     }
  //   ]
  // },
  // {
  //   description: 'RegExp objects',
  //   tests: [
  //     {
  //       description: 'equal RegExp objects',
  //       value1: /foo/,
  //       value2: /foo/,
  //       equal: true
  //     },
  //     {
  //       description: 'not equal RegExp objects (different pattern)',
  //       value1: /foo/,
  //       value2: /bar/,
  //       equal: false
  //     },
  //     {
  //       description: 'not equal RegExp objects (different flags)',
  //       value1: /foo/,
  //       value2: /foo/i,
  //       equal: false
  //     },
  //     {
  //       description: 'RegExp and string are not equal',
  //       value1: /foo/,
  //       value2: 'foo',
  //       equal: false
  //     },
  //     {
  //       description: 'RegExp and object are not equal',
  //       value1: /foo/,
  //       value2: {},
  //       equal: false
  //     }
  //   ]
  // },
  // {
  //   description: 'sample objects',
  //   tests: [
  //     {
  //       description: 'big object',
  //       value1: {
  //         prop1: 'value1',
  //         prop2: 'value2',
  //         prop3: 'value3',
  //         prop4: {
  //           subProp1: 'sub value1',
  //           subProp2: {
  //             subSubProp1: 'sub sub value1',
  //             subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
  //           }
  //         },
  //         prop5: 1000,
  //         prop6: new Date(2016, 2, 10)
  //       },
  //       value2: {
  //         prop5: 1000,
  //         prop3: 'value3',
  //         prop1: 'value1',
  //         prop2: 'value2',
  //         prop6: new Date('2016/03/10'),
  //         prop4: {
  //           subProp2: {
  //             subSubProp1: 'sub sub value1',
  //             subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
  //           },
  //           subProp1: 'sub value1'
  //         }
  //       },
  //       equal: true
  //     }
  //   ]
  }
];

function map(obj, Class) {
  var a = new (Class || Map);
  for (var key in obj)
    a.set(key, obj[key]);
  return a;
}

function myMap(obj) {
  return map(obj, MyMap);
}
