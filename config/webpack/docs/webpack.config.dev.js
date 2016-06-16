/*globals __dirname:false */
"use strict";

var path = require("path");

// Replace with `__dirname` if using in project root.
var ROOT = process.cwd();
var OUTPUT_DIR = path.join(ROOT, "docs", "build");

module.exports = {

  entry: {
    app: ["./docs/entry"]
  },

  output: {
    path: OUTPUT_DIR,
    filename: "main.js"
  },

  devServer: {
    contentBase: ROOT,
    noInfo: false
  },

  cache: true,

  devtool: "source-map",

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ["", ".js", ".jsx", ".json"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loaders: [require.resolve("babel-loader")]
      },
      {
        test: /\.json$/,
        loaders: [require("builder-victory-component-dev/require").resolve("json-loader")]
      }
    ]
  }
};
