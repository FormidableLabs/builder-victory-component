Contributing
============

Thanks for helping out! We couldn't build Victory without the support of our awesome community. Here's a guide for getting you started. If you have any questions, don't hesitate to [reach out on Gitter](https://gitter.im/FormidableLabs/victory).

# How to Contribute to Victory

## 1. Create Issues

We love issues!

If you find a bug :bug: the first thing you should do is search for an existing issue describing your problem. It helps if you can add more detail or a reproduction case. See [this list of repos](https://github.com/FormidableLabs/victory/blob/master/CONTRIBUTING.md#fix-bugs), and scroll through or use the search feature.

If you can't find an existing issue, [create a new issue](https://github.com/FormidableLabs/victory/issues/new?labels=bug). **Please add a JSBin or Fiddle demonstrating the issue**. This is the _number one_ most important thing you can do to help us fix the bug!

* [clone this bin](http://jsbin.com/qekike/edit)
* ...[or fork this fiddle](https://jsfiddle.net/5g20p8vd/6/).

## 2. Fix bugs

Feel like writing some code? The best way to get familiar with the code base is to fix a bug!

`Option a)` You can browse bugs repo by repo:

* [victory](https://github.com/FormidableLabs/victory/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
* [victory-chart](https://github.com/FormidableLabs/victory-chart/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
* [victory-core](https://github.com/FormidableLabs/victory-core/issues?q=is%3Aopen+is%3Aissue+core%3Abug)
* [victory-pie](https://github.com/FormidableLabs/victory-pie/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

`Option b):` ...or you can [check out our HuBoard](https://huboard.com/FormidableLabs/victory#/) to see issues across all repos.

Fork the repo from the repository front page of the component you want to work on.

When you've fixed the bug, it's time to write some tests to ensure important corner cases are covered, and that the bug doesn't get introduced again. See [victory-pie.spec.jsx](https://github.com/FormidableLabs/victory-pie/blob/master/test/client/spec/components/victory-pie.spec.js) for an example test suite.

## 3. Create a PR

Submit a PR by clicking "New pull request" from your fork's main repo page. Before submitting a PR, please read the [Developer's Guide](https://github.com/FormidableLabs/victory/blob/master/CONTRIBUTING.md#developers-guide) below. It will help you stay consistent with the code style and get your PRs merged sooner!

We prefer that you fold all your commits into one for bug fixes. It's easy:

```
# 1. Create a separate copy of the branch just to be safe.

$ git checkout -b bug-fixWithOneCommit


# 2. "Soft reset" the precise number of commits you want to squash into one.
#    Replace the `N` with the number of commits you've made! `git log --oneline` if you're unsure.
#    This will result in a staged diff that's ready-to-commit.

$ git reset --soft HEAD~N


# 3. Commit the change. Include the issue #number in the commit message!

$ git commit
```

Make sure to mention the issue **`#number`** in the commit message!

# Developer's Guide

This is an overview. For a more in-depth guide, see [`DEVELOPMENT.md`](https://github.com/FormidableLabs/victory/blob/master/DEVELOPMENT.md#development).

**Note: Victory requires `npm v3`**. To upgrade your global `npm` installation, run `npm install -g npm@3`.

We use [builder](https://github.com/FormidableLabs/builder) to control our
development workflows. `builder` is an npm dependency found in
`node_modules/.bin/builder`. To use the shorthand `builder` command without the
full path, please follow the steps in the `builder`
[local install guide](https://github.com/FormidableLabs/builder#local-install).

The "short, short version" of this on Mac/Linux is to add:

```sh
export PATH="${PATH}:./node_modules/.bin"
```

to your permanent shell configuration.

## Dev Server

Run `builder run dev` to run a webpack dev server with component examples. The dev server runs on `localhost:3000`.

## Checks, Tests

Each bug fix and feature should come with tests. New features should aim for 100% code coverage.


Run `builder run server-test` to run a karma server with HTML reporting, then open http://localhost:3001/test/client/test.html in your browser. This is great for debugging tests.

Run `builder run check` before committing to ensure lint and tests are passing.

We'd like to [start using Enzyme](https://github.com/FormidableLabs/victory/issues/162) for tests. If you feel up for it, please help by converting some existing tests to Enzyme.

## Code Style

We follow a consistent code style, but we don't have a style manual yet. The easiest way to get a feel for the style is to look at source code.

The JavaScript code style is enforced with `eslint` following the [`defaults/configurations/walmart/es6-react`](https://github.com/walmartlabs/eslint-config-defaults#full-configurations) configuration from [`eslint-config-defaults`](https://github.com/walmartlabs/eslint-config-defaults).

## Victory Component Style Guide

Victory is an ecosystem of modular components with similar language and methodologies. Because these components are designed to work together, a consistent set of patterns and conventions is necessary. Please read the following set of standards and examples if you are interested in writing a larger feature, or contributing a new victory component.

### Flexibility

Victory is designed to be as flexible as possible. Code should be free of hard-coded values or one-off solutions. The following patterns also help keep the library flexible: 

**Seperating Rendered Components**

Any rendered component (_i.e._ `<line/>`, `<text/>` and even `<g/>`) should be written as seperate components, and included via `defaultProps` so that they can be overridden the users. This pattern also allows us to use the same code base to support a react native version of Victory. 

These primitive rendered elements are kept in the `victory-core` repo. Please check [here](https://github.com/FormidableLabs/victory-core/tree/master/src/victory-primitives) first before writing a new rendered component. Rendered components should be stateless and as general as possible. [`Point`](https://github.com/FormidableLabs/victory-core/blob/master/src/victory-primitives/point.js) is a good example of a rendered component. Notice that `Point` is written so that it can easily be extended to a [react native compatible version](https://github.com/FormidableLabs/victory-core-native/blob/master/lib/components/victory-primitives/point.js). The appropriate versions of `Point` can then be included as `defaultProps` in [`VictoryScatter`](https://github.com/FormidableLabs/victory-chart/blob/master/src/components/victory-scatter/victory-scatter.js#L353), and the [native version](https://github.com/FormidableLabs/victory-chart-native/blob/master/lib/components/victory-scatter.js)

**Support Data Accessor Props**

Rather than requiring a rigid data structure, Victory components should provide accessor props for formatting whatever data the user provides into a format the component is expecting. Use this [`createAccessor` function](https://github.com/FormidableLabs/victory-core/blob/master/src/victory-util/helpers.js#L117) to build an accessor from props and use it to format data. 

**Support themes**

`defaultProps` should not contain any layout related props because these values may be provided by themes. Necessary layout props should be provided via [`fallbackProps`](https://github.com/FormidableLabs/victory-chart/blob/master/src/components/victory-scatter/victory-scatter.js#L11) instead, and merged with props and themes as needed.

### Sensible Defaults

All Victory components should render _something_ even if no props are provided. This can be accomplished with default data and other `defaultProps`. Victory components should also have sensible behavior even when the minimum of props are provided. For example, if only `data` is provided, a component like `VictoryBar` should calculate a domain from the data provided. All Victory components should also use the default `grayscale` theme so that they have sensible styling even when no styles are provided by the user.

### Consistency

Similar props across Victory components should have the same names and operate similarly. For example, the style prop should almost always have the shape:

```
style={{
  data: {
    ...
  },
  labels: {
    ...
  }
}}
```

When writing a new component please reference other Victory components when deciding on a set of props. When writing a component for use with VictoryChart, the API should close to a strict superset of the props described in other components like [`VictoryBar`](https://github.com/FormidableLabs/victory-chart/blob/master/src/components/victory-bar/victory-bar.js#L46)

### Animation 

Victory Components animate via a flexible animation wrapper `VictoryTransition` which handles load animations and entrance and exit transitions before interpolation between sets of props with `VictoryAnimation`. All Victory components that render elements (not HOCs that are only responsible for coodinating other components) should return the component wrapped in `VictoryTransition` as in this [example](https://github.com/FormidableLabs/victory-chart/blob/master/src/components/victory-scatter/victory-scatter.js#L469). Components should also expose their set of transiton parameters via a static method. Most components will use standard transitions: either discrete [as in VictoryScatter](https://github.com/FormidableLabs/victory-chart/blob/master/src/components/victory-scatter/victory-scatter.js#L22) or continuous [as in VictoryLine](https://github.com/FormidableLabs/victory-chart/blob/master/src/components/victory-line/victory-line.js#L21). It also possible to define custom default transitions where appropriate. For example [VictoryBar defines custom transitions](https://github.com/FormidableLabs/victory-chart/blob/master/src/components/victory-bar/victory-bar.js#L29) which cause the barse to rise from zero. These transitions and other animation properties can all be defined by users via the `animate` prop.

### Events

Victory's event system is as general as possible, with no hard-coded events. Events may be attached to any rendered element, and may target any other rendered element. In order for this system to work, all Victory components need to precalculate the props that will be provided to each element they will be responsible for rendering, and expose that calculation as a static method `getBaseProps` for higher order Victory components to use. The `getBaseProps` method should return an object with props stored by `eventKey` or `index` and type (usually `data` or `labels`). See [this example from VictoryScatter](https://github.com/FormidableLabs/victory-chart/blob/master/src/components/victory-scatter/helper-methods.js#L8). Events should be set up in the constructor of each component, and referenced when `componentWillMount` or `componentWillReceiveProps`, [like so](https://github.com/FormidableLabs/victory-chart/blob/master/src/components/victory-scatter/victory-scatter.js#L368). Events are then [bound to each rendered element](https://github.com/FormidableLabs/victory-chart/blob/master/src/components/victory-scatter/victory-scatter.js#L396), and any modifications caused by events and stored on state are [merged with the props of the rendered component](https://github.com/FormidableLabs/victory-chart/blob/master/src/components/victory-scatter/victory-scatter.js#L399).  Any higher components that are responsible for coordinating other Victory components (_i.e._ VictoryChart, VictoryGroup) should make use of the [`VictorySharedEvents` wrapper](https://github.com/FormidableLabs/victory-core/blob/master/src/victory-shared-events/victory-shared-events.js)

