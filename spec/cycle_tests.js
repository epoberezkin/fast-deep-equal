'use strict';

var obj1 = {a: 1, b: 2};
var obj2 = {a: 1, b: 2};
var obj3 = {a: 1, b: 2};
obj1.c = obj2;
obj2.c = obj3;
obj3.c = obj3;

var obj4 = {e: 3, f: 4};
var obj5 = {a: 1, b: 2};
var obj6 = {a: 1, b: 2};
obj4.c = obj4;
obj5.c = obj4;
obj6.c = obj6;

var obj7 = {a: 1, b: 2};
var obj8 = {a: 1, b: 2};
var obj9 = {a: 1, b: 2};
obj7.c = obj7;
obj8.c = obj9;
obj9.c = obj8;

var arr1 = [1, 2];
var arr2 = [1, 2];
var arr3 = [1, 2];
arr1.push(arr2);
arr2.push(arr3);
arr3.push(arr3);

var arr4 = [3, 4];
var arr5 = [1, 2];
var arr6 = [1, 2];
arr4.push(arr4);
arr5.push(arr4);
arr6.push(arr6);


module.exports = [
  {
    description: 'cyclic objects',
    tests: [
      {
        description: 'equal cyclic objects #1',
        value1: obj1,
        value2: obj2,
        equal: true
      },
      {
        description: 'equal cyclic objects #2',
        value1: obj1,
        value2: obj3,
        equal: true
      },
      {
        description: 'equal cyclic objects #3',
        value1: obj2,
        value2: obj3,
        equal: true
      },
      {
        description: 'equal cyclic objects #4',
        value1: obj7,
        value2: obj8,
        equal: true
      },
      {
        description: 'not equal cyclic objects',
        value1: obj5,
        value2: obj6,
        equal: false
      }
    ]
  },

  {
    description: 'cyclic arrays',
    tests: [
      {
        description: 'equal cyclic arrays #1',
        value1: arr1,
        value2: arr2,
        equal: true
      },
      {
        description: 'equal cyclic arrays #2',
        value1: arr1,
        value2: arr3,
        equal: true
      },
      {
        description: 'equal cyclic arrays #3',
        value1: arr2,
        value2: arr3,
        equal: true
      },
      {
        description: 'not equal cyclic arrays',
        value1: arr5,
        value2: arr6,
        equal: false
      }
    ]
  },
];
