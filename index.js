'use strict';
var createReactClass = require('./src/create-react-class');
var React = require('react');
var Rx = require('rx');

var Cycle = {
  /**
   * The component's definition function.
   *
   * @callback DefinitionFn
   * @param {Object} interactions - The collection of events.
   * @param {Object} props - The observable for React props.
   * @param {Object} [self] - "this" object for the React component.
   * @returns {}
   */
  /**
   * The component's definition.
   *
   * @typedef {(Observable<ReactElement>|{
   *   view: Observable<ReactElement>,
   *   events: ?Object,
   *   dispose: ?Function
   * })} ComponentDefinition
   */

  /**
   * Takes a `DefinitionFn` function which outputs an Observable of React
   * elements, and returns a native React component which can be used normally
   * by `React.createElement`.
   *
   * @function component
   * @param {String} displayName - A name which identifies the React component.
   * @param {DefinitionFn} definitionFn - The implementation for the React component.
   * This function takes two arguments: `interactions`, and `properties`, and
   * should output an Observable of React elements.
   * @param {Object} [options] - The options for component.
   * @returns {ReactComponent} The React component.
   */
  component: createReactClass(React),

  /**
   * A shortcut to the root object of React.
   * @name React
   */
  React: React,

  /**
   * A shortcut to the root object of [RxJS](https://github.com/Reactive-Extensions/RxJS).
   * @name Rx
   */
  Rx: Rx
};

module.exports = Cycle;
