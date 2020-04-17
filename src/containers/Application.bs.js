'use strict';

var React = require("react");
var HomePage$Tabletop = require("../pages/HomePage.bs.js");
var ReasonReactRouter = require("reason-react/lib/js/src/ReasonReactRouter.js");
var NotFoundPage$Tabletop = require("../pages/NotFoundPage.bs.js");

function Application(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url.path;
  return React.createElement("span", undefined, match ? React.createElement(NotFoundPage$Tabletop.make, { }) : React.createElement(HomePage$Tabletop.make, { }));
}

var make = Application;

exports.make = make;
/* react Not a pure module */
