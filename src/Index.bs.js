'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Application$Tabletop = require("./containers/application.bs.js");

var app_container = document.createElement("div");

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(Application$Tabletop.make, { }), makeContainer("Reducer From ReactJS Docs"));

exports.app_container = app_container;
exports.makeContainer = makeContainer;
/* app_container Not a pure module */
