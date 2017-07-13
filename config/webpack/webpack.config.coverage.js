"use strict";
/**
 * Webpack frontend test (w/ coverage) configuration.
 */
var archDevRequire = require("builder-victory-component-dev/require");
var _ = archDevRequire("lodash");
var testCfg = require("./webpack.config.test");

module.exports = _.merge({}, testCfg, {
  module: {
    rules: (testCfg.module.rules || []).concat([
      {
        test: /src\/.*\.js$/,
        exclude: /(test|node_modules)\//,
        use: {
          loader: archDevRequire.resolve("istanbul-instrumenter-loader"),
          options: { esModules: true }
        },
        enforce: "post"
      }
    ])
  }
});
