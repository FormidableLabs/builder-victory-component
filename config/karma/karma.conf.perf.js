"use strict";

var path = require("path");
var webpackPerfCfg = require("../webpack/webpack.config.perf");

var MAIN_PATH = path.join(process.cwd(), "perf/client/main.js");
var PREPROCESSORS = {};
PREPROCESSORS[MAIN_PATH] = ["webpack"];

/*
 * Karma Configuration: "perf" version.
 *
 * This configuration is the same as basic one-shot version, just with
 * performance benchmarks.
 */
module.exports = function (config) {
  /* eslint-disable global-require */
  require("./karma.conf")(config);
  config.set({
    preprocessors: PREPROCESSORS,
    frameworks: ["benchmark"],
    reporters: ["benchmark"],
    browsers: ["PhantomJS"],
    basePath: ".", // repository root.
    files: [
      MAIN_PATH
    ],
    webpack: webpackPerfCfg
  });
};
