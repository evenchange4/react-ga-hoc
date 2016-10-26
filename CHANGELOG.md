# react-ga-hoc

## [HEAD]
> Unreleased

## [v3.0.0]
> Oct 26, 2016

* feat(node): upgrade to node v6
* feat(npm): upgrade to npm v3
* feat(eslint): upgrade to eslint v3
* feat(recompose): upgrade to recompose v0.20

## [v2.0.0]
> Apr 14, 2016

* chore(ava): update lint and test
* chore(codecov): switch to use codecov
* chore(react): update to 15.0.1

### **Breaking changes**

* Removed curry as recompose@0.17.0 does and added path as optional argument.

  Before

  ```js
  const Container = pageview(
    () => <div />,
  );
  ```

  After

  ```js
  const Container = pageview(
    path,
  )(() => <div />);
  ```


## [v1.0.0]
> Mar 30, 2016

* first commit
