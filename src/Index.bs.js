'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Application$Tabletop = require("./containers/Application.bs.js");

var appContainer = document.getElementById("main");

ReactDom.render(React.createElement(Application$Tabletop.make, { }), appContainer);

exports.appContainer = appContainer;
/* appContainer Not a pure module */
