'use strict';

var React = require("react");
var Helmet$Tabletop = require("../atoms/Helmet.bs.js");
var HomePage$Tabletop = require("../pages/HomePage.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var NotFoundPage$Tabletop = require("../pages/NotFoundPage.bs.js");

function Application$Routes(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url.path;
  if (match) {
    return React.createElement(NotFoundPage$Tabletop.make, { });
  } else {
    return React.createElement(HomePage$Tabletop.make, { });
  }
}

var Routes = {
  make: Application$Routes
};

function Application(Props) {
  return React.createElement(React.Fragment, {
              children: null
            }, React.createElement(Helmet$Tabletop.make, { }), React.createElement(Application$Routes, { }));
}

var make = Application;

exports.Routes = Routes;
exports.make = make;
/* react Not a pure module */
