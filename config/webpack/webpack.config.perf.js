"use strict";
/**
 * Webpack frontend perf configuration.
 */
var path = require("path");
var prodCfg = require("./webpack.config");

var archDevRequire = require("builder-victory-component-dev/require");
var _ = archDevRequire("lodash");

// Replace with `__dirname` if using in project root.
var ROOT = process.cwd();

module.exports = {
  cache: true,
  context: path.join(ROOT, "perf/client"),
  entry: "./main",
  output: {
    filename: "main.js",
    publicPath: "/assets/"
  },
  resolve: _.merge({}, prodCfg.resolve, {
    extensions: prodCfg.resolve.extensions.concat([".json"]),
    alias: {
      // Allow root import of `src/FOO` from ROOT/src.
      src: path.join(ROOT, "src")
    }
  }),
  module: _.assign({}, prodCfg.module, {
    loaders: (prodCfg.module.loaders || []).concat([
      {
        test: /\.json$/,
        loader: archDevRequire.resolve("json-loader")
      }
    ])
  }),
  devtool: "source-map"
};
