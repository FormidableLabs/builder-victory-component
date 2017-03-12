"use strict";

/**
 * Aliases for victory components.
 *
 * These use Node resolution semantics to give extra capabilities to the
 * otherwise naive Webpack `require` resolution algorithm. This allows things
 * like multi-repo wrappers to place dependencies / related repos in any place
 * that node allows.
 */
var VICTORY_PKGS = [
  "victory-core",
  "victory-chart",
  "victory-pie",
  "victory"
];

module.exports = VICTORY_PKGS
  // Try to Node resolve
  .map(function (pkg) {
    try {
      return { pkg: pkg, path: require.resolve(pkg) };
    } catch (err) {
      return null;
    }
  })
  // Remove unresolvable aliases
  .filter(Boolean)
  // Convert to aliases object
  .reduce(function (memo, obj) {
    memo[obj.pkg] = obj.path;
    return memo;
  }, {});
