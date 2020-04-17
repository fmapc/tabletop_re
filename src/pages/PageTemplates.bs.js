'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var outer = Curry._1(Css.style, /* :: */[
      Css.display(/* grid */-999565626),
      /* :: */[
        Css.height(Css.pct(100.0)),
        /* :: */[
          Css.width(Css.pct(100.0)),
          /* [] */0
        ]
      ]
    ]);

var inner = Curry._1(Css.style, /* :: */[
      Css.margin(/* auto */-1065951377),
      /* [] */0
    ]);

var Styles = {
  outer: outer,
  inner: inner
};

function PageTemplates$CenteredContent(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: outer
            }, React.createElement("div", {
                  className: inner
                }, children));
}

var CenteredContent = {
  Styles: Styles,
  make: PageTemplates$CenteredContent
};

exports.CenteredContent = CenteredContent;
/* outer Not a pure module */
