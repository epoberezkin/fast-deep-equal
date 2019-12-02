'use strict';

const assert = require('assert');
const sinon = require('sinon');
const React = require('react');
const ReactTestRenderer = require('react-test-renderer');

const equal1 = require('../es6/react');
const equal2 = require('../react');

const run = equal => {
  class ChildWithShouldComponentUpdate extends React.Component {
    shouldComponentUpdate(nextProps) {
      // this.props.children is a h1 with a circular reference to its owner, Container
      return !equal(this.props, nextProps);
    }
    render() {
      return null;
    }
  }

  class Container extends React.Component {
    render() {
      return React.createElement(ChildWithShouldComponentUpdate, {
        children: [
          React.createElement('h1', this.props.title || ''),
          React.createElement('h2', this.props.subtitle || '')
        ]
      });
    }
  }

  describe('advanced', () => {
    let sandbox;
    let warnStub;
    let childRenderSpy;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      warnStub = sandbox.stub(console, 'warn');
      childRenderSpy = sandbox.spy(ChildWithShouldComponentUpdate.prototype, 'render');
    });

    afterEach(() => {
      sandbox.restore();
    });

    describe('React', () => {
      describe('element (with circular references)', () => {
        it('compares without warning or errors', () => {
          const testRenderer = ReactTestRenderer.create(React.createElement(Container));
          testRenderer.update(React.createElement(Container));
          assert.strictEqual(warnStub.callCount, 0);
        });
        it('elements of same type and props are equal', () => {
          const testRenderer = ReactTestRenderer.create(React.createElement(Container));
          testRenderer.update(React.createElement(Container));
          assert.strictEqual(childRenderSpy.callCount, 1);
        });
        it('elements of same type with different props are not equal', () => {
          const testRenderer = ReactTestRenderer.create(React.createElement(Container));
          testRenderer.update(React.createElement(Container, { title: 'New' }));
          assert.strictEqual(childRenderSpy.callCount, 2);
        });
      });
    });
  });
};

run(equal1);
run(equal2);
