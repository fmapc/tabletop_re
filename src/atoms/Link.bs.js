'use strict';

var Cn = require("re-classnames/src/Cn.bs.js");
var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");

var base = Curry._1(Css.style, /* :: */[
      Css.textDecoration(/* none */-922086728),
      /* :: */[
        Css.hover(/* :: */[
              Css.textDecoration(/* underline */131142924),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var Styles = {
  base: base
};

function Link(Props) {
  var className = Props.className;
  var href = Props.href;
  var children = Props.children;
  return React.createElement("a", {
              className: Cn.make(/* :: */[
                    className,
                    /* :: */[
                      base,
                      /* [] */0
                    ]
                  ]),
              href: href,
              onClick: (function ($$event) {
                  $$event.preventDefault();
                  return ReasonReactRouter.push(href);
                })
            }, children);
}

var make = Link;

exports.Styles = Styles;
exports.make = make;
/* base Not a pure module */
