'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Application$Tabletop = require("./containers/Application.bs.js");

var app_container = document.getElementById("main");

ReactDom.render(React.createElement(Application$Tabletop.make, { }), app_container);

exports.app_container = app_container;
/* app_container Not a pure module */
