"use strict";
var LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {

  devServer: {
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
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
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
