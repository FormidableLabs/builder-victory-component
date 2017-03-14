"use strict";

var path = require("path");
var LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

var ALIASES = require("../util/aliases");

var ROOT = process.cwd();
var SRC = path.join(ROOT, "src");
var DEMO = path.join(ROOT, "demo");

module.exports = {

  devServer: {
    port: parseInt(process.env.npm_package_config_wds_port_dev || 3000),
    contentBase: "./demo",
    noInfo: false
  },

  output: {
    path: "./demo",
    filename: "main.js",
    publicPath: "/assets/"
  },

  cache: true,
  devtool: "source-map",
  entry: {
    app: ["./demo/app"]
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: ALIASES
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // Use include specifically of our sources.
        // Do _not_ use an `exclude` here.
        include: [SRC, DEMO],
        // **Note**: Cannot use shorthand `"babel-loader"` or `"babel"` when
        // we are playing around with `NODE_PATH` in builder. Manually
        // resolve path.
        loader: require.resolve("babel-loader")
      }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      "shorthands": true,
      "currying": true,
      "flattening": true,
      "paths": true,
      "placeholders": true
    })
  ]
};
