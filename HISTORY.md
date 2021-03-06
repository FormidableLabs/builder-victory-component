History
=======

## 5.2.0
* babel config for ES module importing
* use builder concurrent --buffer

## 5.1.2
* Preprocess polyfills for all test configs

## 5.1.1
* Preprocess polyfills

## 5.1.0
* Add `Set` and `Map` polyfills to support React 16

## 5.0.1
* Fix and upgrade instabul instrumentation for test coverage.

## 5.0.0
* Output ES `es/` sources directory. Upgrade to webpack3.

## 4.0.4
* Add exceptions for eslint no-magic-numbers for common angles (90, 180, 270, 360)

## 4.0.3
* Add exceptions for eslint no-magic-numbers

## 4.0.2
* Bump `publishr` dependency in `builder-victory-component-dev`

## 4.0.1
* Add `publishr` dependency to `builder-victory-component-dev`

## 4.0.0
* Switch to `eslint-config-formidable`
* Many other dependency updates.

## 3.2.3
* Fix errant publish in `builder-victory-component-dev` in `3.2.2`

## 3.2.2
* Add external for `prop-types`.

## 3.2.1
* Add a webpack dependency to `builder-victory-component-dev` to ensure correct webpack version.

## 3.2.0
* Move dev archetype to separate project:
  https://github.com/FormidableLabs/builder-victory-component-dev
* Update CI matrix.
* Start adding development yarn support.
* Add `build-watch` script for just watching babel transforms.

## 3.1.0
* Add `publishr` `postversion` and `postpublish` scripts

## 3.0.0
* Remove ecology docs infrastructure

## 2.5.0
* Add performance benchmark tasks

## 2.4.1
* remove unused babel presets

## 2.4.0
* use `"flattening": true` config for `lodash-webpack-plugin`

## 2.3.0
* use babel-preset-react-native (non stage 0)

## 2.2.0
* updates babelrc to support victory native

## 2.1.8
* Use webpack json loader

## 2.1.7
* Upgrade `formidable-landers` to use the latest Radium
* Upgrade `ecology` that depends on React 15

## 2.1.6
* Enables feature sets for lodash webpack plugin

## 2.1.5
* Alters webpack config to support enzyme + react 15

## 2.1.4
* Adds babel and webpack plugins for lodash.

## 2.1.3
* remove extension from app entry point paths in demo and docs webpack configs

## 2.1.2
* fix webpack config for cheerio / chai-enzyme support

## 2.1.1
* Fix semver

## 2.0.2
* Update formidable-landers

## 2.1.0
* exists

## 2.0.1
* Fix `docs-hot` and `docs-dev` builder tasks.
* Remove docs site static generation tasks from archetype.

## 2.0.0
* Require ROOT projects to include `.eslintrc` files that extend the archetype. This
  ensures support for lint plugins in editors.
* Simplify and clean up lint tasks in archetype.

## 1.0.7
* update formidable-landers, revert to lodash 3

## 1.0.6
* update babel-eslint

## 1.0.5
* add babel dev deps

## 1.0.4
* use lodash 4

## 1.0.3
* Bug fix: Update isparta-loader dependency to work with Babel 6

## 1.0.2
* Bug fix: Update babel loader for docs

## 1.0.1
* Bug fix: Transpile `test/`

## 1.0.0
* Upgrade to Babel 6

## 0.2.3

* Revert move build dependencies to dev package
  - CI jobs still depend on build deps existing in production mode.

## 0.2.2

* Move build dependencies to dev package
* Update documentation

## 0.2.1

* Add `server-docs` task that starts a http-server for to test built static `docs/` site
* Remove `test` task in archetype `scripts` section, opening up for projects to implement `npm test` tasks that don't clash with the archetype.
* Remove `peerDependencies` and unneeded `devDependencies`. Add documentation instead.
* Use `builder-support` for publishing dev archetype

## 0.2.0

* Remove application dependencies (`lodash`, `radium`) - it's now the responsibility of each Victory component to bring dependencies.
* Add `peerDependencies` (`builder`, `radium`, `react`, `react-dom`).

## 0.1.2

* Fix hot reload configuration

## 0.1.1

* Don't `git add -A dist` in the `npm:version` task. `dist/` should not be committed, just published along with `lib/` to NPM.

## 0.1.0

* Upgrade to Radium 0.16.2 with server-side-rendered media queries.
  This is a breaking change; Please refer to the [Radium upgrade guide][radium-0.16-upgrade-guide]
* Add DEVELOPMENT, CONTRIBUTION guides for Victory

## 0.0.9

* Ensure webpack exits with status 1 on errors

## 0.0.8

* Fix issue with exported React global in UMD distribution bundle
  - Enables use of Victory via e.g. NPMCDN

## 0.0.7

* Build both `dist/` and `lib/` on `postinstall`

## 0.0.6

* Fix issue with `builder docs-*` output paths

## 0.0.5

* Add raw-loader and react-docgen to support building Ecology docs

## 0.0.4

*  this release
  - removes references to removed webpack loaders (style, url etc)
  - corrects the paths for new doc scripts
  - adds `push-gh-pages` script

## 0.0.3

* test release

## 0.0.2

* Release according to the [fine manual][]

## 0.0.1

* Initial release. ( [@coopy][] )

[@coopy]: https://github.com/coopy
[fine manual]: https://github.com/FormidableLabs/builder-victory-component/blob/master/CONTRIBUTING.md
[radium-0.16-upgrade-guide]: https://github.com/FormidableLabs/radium/blob/master/docs/guides/upgrade-v0.16.x.md
