'use strict';

var React = require("react");
var ReactHelmet = require("react-helmet");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");

function prefix(contents) {
  return "Tabletop | " + contents;
}

function computeTitle(url) {
  var match = url.path;
  if (match) {
    return "Tabletop | Not found";
  } else {
    return "Tabletop | Home";
  }
}

function Helmet(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  return React.createElement(ReactHelmet.Helmet, {
              title: computeTitle(url)
            });
}

var make = Helmet;

exports.prefix = prefix;
exports.computeTitle = computeTitle;
exports.make = make;
/* react Not a pure module */
