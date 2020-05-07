# clsf, classnames

A function that merges the given class names, regardless of their format. It also filters out invalid class names, and is compatible with several frameworks such as react, angular, vue, ember, and many more !

<a href="https://github.com/yoicalsin/clsf"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/clsf" target="_blank">
<img src="https://img.shields.io/npm/v/clsf" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/clsf" target="_blank">
<img src="https://img.shields.io/npm/l/clsf" alt="Package License" /></a>
<a href="https://www.npmjs.com/clsf" target="_blank">
<img src="https://img.shields.io/npm/dm/clsf" alt="NPM Downloads" /></a>
<a href="https://github.com/yoicalsin/clsf" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yoicalsin/clsf"><img src="https://img.shields.io/badge/Github%20Page-clsf-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yoicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yoicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yoicalsin.svg?style=social&label=Follow"></a>

## Installation

```bash
# Using npm
npm install --save clsf

# Using yarn
npm add --save clsf
```

## 🌎 Usage

```js
const clsf = require('clsf');

clsf('a', 'b', 'c');
//=> 'a b c'

clsf('a b', 'c d', 'e f');
//=> 'a b c d e f'

clsf(['a', 'b'], ['c', 'd']);
//=> 'a b c d'

clsf(['a b', 'c d'], ['e f', 'g h']);
//=> 'a b c d e f g h'

clsf('a', 'b', ifAlready && 'c');
//=> 'a b'

clsf('a', 'b', 'c', null, ['d', null], () => {}, 'e', undefined);
//=> 'a b c d e'
```

## 🎁 Using Typescript

```ts
import cls from 'clsf';
// or
import { cls } from 'clsf';
```

## ⭐ Support for

`clsf` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Author [Yoni Calsin](https://github.com/yoicalsin)
-  Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## 🚀 Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`clsf` under [License MIT.](LICENSE)
