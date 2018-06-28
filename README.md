# `fa-icon-list`

> All the FontAwesome 4.7.0 icon names.

## Installing

If you are using NPM:

```shell
npm i --save fa-icon-list
```

If you are using Yarn:
```shell
yarn add fa-icon-list
```

## Basic Usage

Just call the returned function after importing it:

```javascript
const faIconList = require('fa-icon-list')

console.log(faIconList()) // Array [...]
```

## API

### `faIconList`

`faIconList` — Returns all the FontAwesome 4.7.0 icon names.

#### Description

```javascript
array faIconList ( [, boolean getFullClass = true ] )
```

The second parameter is a boolean (by default true) that controls the array values.  

- `true` (default): Returns the values as the complete icon class name. _(`fa fa-users`, for example)._
- `false`: Returns only the icon name. _(`users`, for example)._

## License

This package is for [FontAwesome 4.7.0](https://fontawesome.com/v4.7.0).

The source code of this repository is under the [MIT License](https://github.com/lffg/yiq/blob/master/LICENSE).  
Copyright © [Luiz Felipe F.](https://lffg.github.io).
