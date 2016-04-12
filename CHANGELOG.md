# react-ga-hoc

## [HEAD]
> Unreleased

* chore(ava): update lint and test
* chore(codecov): switch to use codecov
* chore(react): update to 15.0.1

### **Breaking changes**

* Remove curry as recompose@0.17.0 does

  Before

  ```js
  const Container = pageview(
    path,
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
