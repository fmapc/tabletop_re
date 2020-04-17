'use strict';

var React = require("react");

var Styles = { };

function Application(Props) {
  return React.createElement("span", undefined, "Hello, world!");
}

var make = Application;

exports.Styles = Styles;
exports.make = make;
/* react Not a pure module */
