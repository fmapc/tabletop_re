'use strict';

var React = require("react");

function Application(Props) {
  return React.createElement("span", undefined, "Hello, world!");
}

var make = Application;

exports.make = make;
/* react Not a pure module */
