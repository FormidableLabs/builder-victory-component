"use strict";

var path = require("path");
var LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

var aliases = require("../util/aliases");

var SRC = path.resolve("src");
var DEMO = path.resolve("demo");
var WDS_PORT = 3000;

module.exports = {

  devServer: {
    port: parseInt(process.env.npm_package_config_wds_port_dev || WDS_PORT),
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
    extensions: [".js", ".jsx"],
    alias: aliases.pkgs
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
        loader: require.resolve("babel-loader"),
        // CommonJS module transforms.
        query: {
          forceEnv: "commonjs"
        }
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
