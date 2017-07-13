"use strict";

/**
 * Aliases for victory components.
 *
 * These use Node resolution semantics to give extra capabilities to the
 * otherwise naive Webpack `require` resolution algorithm. This allows things
 * like multi-repo wrappers to place dependencies / related repos in any place
 * that node allows.
 */
var path = require("path");

var VICTORY_PKGS = [
  "victory-core",
  "victory-chart",
  "victory-pie",
  "victory"
]
  // Try to Node resolve
  .map(function (pkg) {
    try {
      return {
        pkg: pkg,
        path: path.dirname(require.resolve(path.join(pkg, "package.json")))
      };
    } catch (err) {
      return null;
    }
  })
  // Remove unresolvable aliases
  .filter(Boolean);

var toObject = function (extraPath) {
  return VICTORY_PKGS.reduce(function (memo, obj) {
    memo[obj.pkg] = extraPath ? path.join(obj.path, extraPath) : obj.path;
    return memo;
  }, {});
};

module.exports = {
  pkgs: toObject()
};
