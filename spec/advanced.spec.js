'use strict';

const assert = require('assert');
const sinon = require('sinon');
const React = require('react');
const ReactTestRenderer = require('react-test-renderer');

const equal = require('../index');
const tests = require('./tests');

class ChildWithShouldComponentUpdate extends React.Component {
  shouldComponentUpdate(nextProps) {
    // this.props.children is a div with a circular reference to its owner, Container
    return !equal(this.props, nextProps);
  }
  render() {
    return null;
  }
}

class Container extends React.Component {
  render() {
    return React.createElement(ChildWithShouldComponentUpdate, {
      children: React.createElement('div')
    });
  }
}

describe('advanced', () => {
  let sandbox;
  let warnStub;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    warnStub = sandbox.stub(console, 'warn');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('React', () => {
    describe('render element (with circular references)', () => {
      it('compares without warning or errors', () => {
        const testRenderer = ReactTestRenderer.create(React.createElement(Container));
        testRenderer.update(React.createElement(Container));
        assert.strictEqual(warnStub.notCalled, true);
      });
    });
  });

  describe('warnings', () => {
    describe('circular reference', () => {
      it('warns on circular refs but do not throw', () => {
        const circularA = {a: 1};
        circularA.self = circularA;
        const circularB = {a: 1};
        circularB.self = circularB;
        equal(circularA, circularB);
        assert.strictEqual(warnStub.calledOnce, true);
      });
    });
    describe('basics usage', () => {
      it('never warns', () => {
        tests.generic.forEach( (suite) => {
          suite.tests.forEach( (test) => {
            assert.strictEqual(equal(test.value1, test.value2), test.equal);
          });
        });
        assert.strictEqual(warnStub.notCalled, true);
      });
    });
  });
});
