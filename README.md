# react-ga-hoc

> Send GA pageview safely with async data.

[![Travis][build-badge]][build] [![Codecov Status][codecov-badge]][codecov] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]

[![Dependency Status][dependency-badge]][dependency] [![devDependency Status][devDependency-badge]][devDependency] [![peerDependency Status][peerDependency-badge]][peerDependency]

[build-badge]: https://img.shields.io/travis/evenchange4/react-ga-hoc/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-ga-hoc

[npm-badge]: https://img.shields.io/npm/v/react-ga-hoc.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-ga-hoc

[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/react-ga-hoc.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/react-ga-hoc?branch=master

[npm-downloads]: https://img.shields.io/npm/dt/react-ga-hoc.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/react-ga-hoc.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/

[dependency-badge]: https://david-dm.org/evenchange4/react-ga-hoc.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/react-ga-hoc
[devDependency-badge]: https://david-dm.org/evenchange4/react-ga-hoc/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/react-ga-hoc#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/react-ga-hoc/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/react-ga-hoc#info=peerDependencies
[![Greenkeeper badge](https://badges.greenkeeper.io/evenchange4/react-ga-hoc.svg)](https://greenkeeper.io/)

## Installation

```console
$ npm install react-ga react-ga-hoc --save
```

## Usage

- As HOC

```js
import ga from 'react-ga';
import { pageview } from 'react-ga-hoc';

// SDK Setup
ga.initialize('id');

// Use HOC with Container
pageview(path)(
  () => <div/>,
);
```

- ES7 decorator

```js
@pageview()
class Container extends React.Component {
  render() {
    return <div/>;
  }
}
```

## API

```js
pageview(
  ?path: string,
): HigherOrderComponent
```

| **Arguments** | **Default**  | **Description**            |
| ------------- | ------------ | -------------------------- |
| `path`        | current path | path to be sent a pageview |

## Test

```
$ npm run lint
$ npm run test:watch
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)
