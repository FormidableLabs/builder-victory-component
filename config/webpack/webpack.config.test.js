"use strict";
/**
 * Webpack frontend test configuration.
 */
var path = require("path");
var prodCfg = require("./webpack.config");

var archDevRequire = require("builder-victory-component-dev/require");
var _ = archDevRequire("lodash");

// Replace with `__dirname` if using in project root.
var ROOT = process.cwd();

module.exports = {
  cache: true,
  context: path.join(ROOT, "test/client"),
  entry: "./main",
  output: {
    filename: "main.js",
    publicPath: "/assets/"
  },
  resolve: _.merge({}, prodCfg.resolve, {
    // enzyme webpack issue https://github.com/airbnb/enzyme/issues/47
    // Necessary for `cheerio` to load
    extensions: prodCfg.resolve.extensions.concat([".json"]),
    alias: {
      // enzyme webpack issue https://github.com/airbnb/enzyme/issues/47
      sinon: "node_modules/sinon/pkg/sinon.js",
      // Allow root import of `src/FOO` from ROOT/src.
      src: path.join(ROOT, "src")
    }
  }),
  // enzyme webpack issue https://github.com/airbnb/enzyme/issues/47
  // Please note that externals may have to change for versions of React
  // other than 0.14.x
  externals: {
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    "text-encoding": "window"
  },
  module: _.assign({}, prodCfg.module, {
    // enzyme webpack issue https://github.com/airbnb/enzyme/issues/47
    noParse: [
      /\/sinon\.js/
    ],
    // enzyme webpack issue https://github.com/airbnb/enzyme/issues/47
    loaders: (prodCfg.module.loaders || []).concat([
      {
        test: /\.json$/,
        loader: archDevRequire.resolve("json-loader")
      }
    ])
  }),
  devtool: "source-map"
};
