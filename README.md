[![Travis Status][trav_img]][trav_site]

Builder Archetype: Victory Component
==================================

A Victory component archetype for [builder][].

## Installation

To use the production and development workflows, install both this package
and the development module:

```sh
$ npm install --save builder-victory-component
$ npm install --save-dev builder-victory-component-dev
```

## Project Structure

This archetype assumes an architecture as follows:

```
.
├── .builderrc                  # Configures builder archetype
├── .eslintrc                   # Configures eslint
├── package.json
├── demo                        # Component demo
│   ├── app.jsx
│   └── index.html
├── dist                        # Distribution build destination (standalone)
├── lib                         # Lib build destination (npm)
├── src                         # Component source
│   ├── components
│   │   └── *.jsx?
│   └── index.js
├── perf                        # Component performance benchmarks
    └── .eslintrc               # Configures eslint for tests
    └── client
        ├── main.js
        ├── bench
        │   └── components
        │       └── *bench.js?
        └── test.html
└── test                        # Component tests
    └── .eslintrc               # Configures eslint for tests
    └── client
        ├── main.js
        ├── spec
        │   └── components
        │       └── *.jsx?
        └── test.html
```

The `name` field in `package.json` (the published `npm` package name) is
assumed to be:

1. The desired file name of the distribution files and dash-cased.
2. The desired default exported class name when converted to PascalCase.

So, if a `package.json` has:

```js
{
  "name": "my-cool-component"
}
```

The distribution files to output are:

```
dist/my-cool-component.js
dist/my-cool-component.js.map
dist/my-cool-component.min.js
dist/my-cool-component.min.js.map
```

and the exported class name is `MyCoolComponent`.

An example project using this structure is:
[formidable-react-component-boilerplate][]

## Usage Notes

### Eslint

The implementing project will need to add an `.eslintrc` file in the root
which should extend the archetype eslint configuration. Another `.eslintrc` file
should be placed in the `test/` directory, extending the test eslint configuration.
The presence of these files ensures support for most editor and IDE lint plugins.

These files will be added automatically when generating a new Victory component
using `builder-init builder-victory-component`:

```yaml
--- # <ROOT>/.eslintrc
  extends: ./node_modules/builder-victory-component/config/eslint/.eslintrc-source
```

```yaml
--- # <ROOT>/test/.eslintrc
  extends: ../node_modules/builder-victory-component/config/eslint/.eslintrc-test
```

### Babel Configuration

This archetype does not currently specify its own `.babelrc`. Your project
should specify its own in the root directory if you want non-default Babel
settings (like using stage 0, for instance). See [the recommended
settings](config/babel/.babelrc).

### peerDependencies

This archetype is meant to be used in a very specific context: A Victory component. As such, it's assumed that the implementing component bring along these dependencies:
- `react` & `react-dom 0.14+`
- Most Victory components will also want to depend on `radium 0.16+``.

The reason we don't specify these in the archetype `package.json`'s `peerDependencies` is to lower the friction to testing out `beta` builds of React by specifying a `peer` of `react 0.14.x`. Similarly, specifying a `peer` of `>=0.14.x` would imply that we're compatible with future React releases, something we can't promise.

## Tasks

Run `$ builder help` to see usage.

```
Usage:

  builder <action> <task(s)>

Actions:

  run, concurrent, envs, help

Flags: General

  --builderrc: Path to builder config file (default: `.builderrc`)

  --help: Display help and exit

  --version: Display version and exit

  --quiet: Silence logging

  --log-level: Level to log at (`info`, `warn`, `error`, `none`)

  --env: JSON string of environment variables to add to process

  --env-path: JSON file path of environment variables to add to process

Tasks:

  npm:postinstall
    [builder-victory-component] cd lib || builder run build --expand-archetype

  npm:postpublish
    [builder-victory-component] publishr postpublish

  npm:postversion
    [builder-victory-component] publishr postversion

  npm:preversion
    [builder-victory-component] builder run check

  npm:test
    [builder-victory-component] builder run test-frontend

  npm:version
    [builder-victory-component] builder run clean && builder run build

  build
    [builder-victory-component] builder run build-lib && builder run build-dist

  build-dist
    [builder-victory-component] builder run clean-dist && builder run build-dist-min && builder run build-dist-dev

  build-dist-dev
    [builder-victory-component] webpack --bail --config node_modules/builder-victory-component/config/webpack/webpack.config.dev.js --colors

  build-dist-min
    [builder-victory-component] webpack --bail --config node_modules/builder-victory-component/config/webpack/webpack.config.js --colors

  build-lib
    [builder-victory-component] builder run clean-lib && babel src -d lib --copy-files

  build-watch
    [builder-victory-component] babel src -d lib --copy-files -w

  check
    [builder-victory-component] builder run lint && builder run npm:test

  check-ci
    [builder-victory-component] builder run lint && builder run test-ci

  check-cov
    [builder-victory-component] builder run lint && builder run test-cov

  check-dev
    [builder-victory-component] builder run lint && builder run test-dev

  check-perf
    [builder-victory-component] builder run lint-perf && builder run test-perf

  clean
    [builder-victory-component] builder run clean-lib && builder run clean-dist

  clean-dist
    [builder-victory-component] rimraf dist

  clean-lib
    [builder-victory-component] rimraf lib

  dev
    [builder-victory-component] builder concurrent server-dev server-test

  hot
    [builder-victory-component] builder concurrent server-hot server-test

  lint
    [builder-victory-component] builder concurrent lint-source lint-demo lint-test

  lint-demo
    [builder-victory-component] eslint --color --ext .js,.jsx demo

  lint-perf
    [builder-victory-component] eslint --color --ext .js,.jsx perf

  lint-source
    [builder-victory-component] eslint --color --ext .js,.jsx src

  lint-test
    [builder-victory-component] eslint --color --ext .js,.jsx test

  open-demo
    [builder-victory-component] opener http://127.0.0.1:3000

  open-dev
    [builder-victory-component] builder concurrent dev open-demo

  open-hot
    [builder-victory-component] builder concurrent hot open-demo

  postinstall
    [ROOT] cd lib || builder run npm:postinstall

  postpublish
    [ROOT] builder run npm:postpublish

  postversion
    [ROOT] builder run npm:postversion

  preversion
    [ROOT] builder run npm:preversion

  server-dev
    [builder-victory-component] webpack-dev-server --port 3000 --config node_modules/builder-victory-component/config/webpack/demo/webpack.config.dev.js --colors --content-base demo

  server-hot
    [builder-victory-component] webpack-dev-server --port 3000 --config node_modules/builder-victory-component/config/webpack/demo/webpack.config.hot.js --colors --inline --hot --content-base demo

  server-test
    [builder-victory-component] webpack-dev-server --port 3001 --config node_modules/builder-victory-component/config/webpack/webpack.config.test.js --colors

  start
    [ROOT] builder run hot

  storybook
    [ROOT] start-storybook -p 3001

  test
    [ROOT] builder run check

  test-ci
    [builder-victory-component] builder run test-frontend-ci

  test-cov
    [builder-victory-component] builder run test-frontend-cov

  test-dev
    [builder-victory-component] builder run test-frontend-dev

  test-frontend
    [builder-victory-component] karma start node_modules/builder-victory-component/config/karma/karma.conf.js

  test-frontend-ci
    [builder-victory-component] karma start --browsers PhantomJS,Firefox node_modules/builder-victory-component/config/karma/karma.conf.coverage.js

  test-frontend-cov
    [builder-victory-component] karma start node_modules/builder-victory-component/config/karma/karma.conf.coverage.js

  test-frontend-dev
    [builder-victory-component] karma start node_modules/builder-victory-component/config/karma/karma.conf.dev.js

  test-frontend-perf
    [builder-victory-component] karma start node_modules/builder-victory-component/config/karma/karma.conf.perf.js

  test-perf
    [builder-victory-component] builder run test-frontend-perf

  version
    [ROOT] builder run npm:version

  version-dry-run
    [builder-victory-component] publishr dry-run -V
```

[builder]: https://github.com/FormidableLabs/builder
[formidable-react-component-boilerplate]: https://github.com/FormidableLabs/formidable-react-component-boilerplate
[trav_img]: https://api.travis-ci.org/FormidableLabs/builder-victory-component.svg
[trav_site]: https://travis-ci.org/FormidableLabs/builder-victory-component
