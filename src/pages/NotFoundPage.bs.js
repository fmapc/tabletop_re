'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Link$Tabletop = require("../atoms/Link.bs.js");
var Palette$Tabletop = require("../theme/Palette.bs.js");
var PageTemplates$Tabletop = require("./PageTemplates.bs.js");

var heading = Curry._1(Css.style, /* :: */[
      Css.color(Palette$Tabletop.carbon),
      /* :: */[
        Css.fontSize(Css.px(100)),
        /* :: */[
          Css.marginBottom(Css.px(20)),
          /* [] */0
        ]
      ]
    ]);

var link = Curry._1(Css.style, /* :: */[
      Css.color(Palette$Tabletop.fruit),
      /* :: */[
        Css.fontSize(Css.px(20)),
        /* [] */0
      ]
    ]);

var outer = Curry._1(Css.style, /* :: */[
      Css.textAlign(/* center */98248149),
      /* [] */0
    ]);

var Styles = {
  heading: heading,
  link: link,
  outer: outer
};

function NotFoundPage(Props) {
  return React.createElement(PageTemplates$Tabletop.CenteredContent.make, {
              children: React.createElement("div", {
                    className: outer
                  }, React.createElement("h1", {
                        className: heading
                      }, "Sorry, no dice!"), React.createElement(Link$Tabletop.make, {
                        className: link,
                        href: "/",
                        children: "Take me back"
                      }))
            });
}

var make = NotFoundPage;

exports.Styles = Styles;
exports.make = make;
/* heading Not a pure module */
