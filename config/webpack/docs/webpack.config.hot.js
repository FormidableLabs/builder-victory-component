"use strict";

var _ = require("lodash");
var base = require("./webpack.config.dev");

// Update our own module version.
var baseModule = _.cloneDeep(base.module);
// First loader needs react hot.
baseModule.loaders[0].loaders = ["react-hot"].concat(baseModule.loaders[0].loaders);

module.exports = _.merge({}, _.omit(base, "entry", "module"), {
  entry: {
    app: ["webpack/hot/only-dev-server", "./docs/entry.jsx"]
  },

  module: baseModule
});
