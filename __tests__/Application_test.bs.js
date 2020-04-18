'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Core$Tabletop = require("../src/Core.bs.js");
var Bootstrap$Tabletop = require("./Bootstrap.bs.js");
var Application$Tabletop = require("../src/Application.bs.js");

Jest.describe("Application.Helmet.applyPrefix", (function (param) {
        return Jest.test("prefixes given string with application title", (function (param) {
                      return Jest.Expect.toEqual(Core$Tabletop.Config.title + " | Route", Jest.Expect.expect(Application$Tabletop.Helmet.applyPrefix("Route")));
                    }));
      }));

/*  Not a pure module */
