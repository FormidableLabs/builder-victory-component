/**
 * Archetype-friendly require for **archetype configuration files**.
 *
 * Supports:
 *
 * ```js
 * var lodash = require("builder-victory-component-dev/require")("lodash");
 * ```
 *
 * This pattern should be used for any **archetype configuration files** that
 * require a dependency provided by this development archetype. Optionally,
 * this pattern can be used in the _root project_ to provide dev dependencies
 * from this dev archetype.
 *
 * See: https://github.com/FormidableLabs/builder/blob/master/README.md
 *      #node-require-resolution-and-module-pattern
 */
/*eslint-disable strict, global-require*/
module.exports = require;
