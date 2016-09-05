"use strict";

var webpackPerfCfg = require("../webpack/webpack.config.perf");

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
    frameworks: ["react-perf", "phantomjs-shim"],
    reporters: ["react-perf-reporter"],
    browsers: ["PhantomJS"],
    basePath: ".", // repository root.
    files: [
      // Test bundle (must be created via `npm run dev|hot|server-test`)
      "http://127.0.0.1:3001/assets/main.js"
    ],
    webpack: webpackPerfCfg
  });
};
