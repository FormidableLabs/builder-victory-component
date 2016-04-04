/**
 * Archetype-friendly require for **root application code**.
 *
 * Supports:
 *
 * ```js
 * var lodash = require("builder-victory-component/require")("lodash");
 * ```
 *
 * For **application dependencies** if you want this archetype to provide
 * actual dependencies in your root project. The above pattern is _not_ needed
 * for configuration files in this archetype as normal Node.js require
 * resolution already works fine.
 *
 * See: https://github.com/FormidableLabs/builder/blob/master/README.md
 *      #node-require-resolution-and-module-pattern
 */
/*eslint-disable strict, global-require*/
module.exports = require;
