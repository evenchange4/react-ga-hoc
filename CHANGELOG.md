# react-ga-hoc

## [HEAD]
> Unreleased

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
