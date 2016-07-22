# roll-reduce
[![npm version](https://img.shields.io/npm/v/roll-reduce.svg)](https://npmjs.org/package/roll-reduce)
[![Build Status](https://travis-ci.org/raineorshine/roll-reduce.svg?branch=master)](https://travis-ci.org/raineorshine/roll-reduce)

Generic rolling-value reducer interface, e.g. rolling averages, etc.

## Install

```sh
$ npm install --save roll-reduce
```

## Usage
```js
import Rolling from '../src/index.js'
const rolling = Rolling(3)

rolling.push(1)
rolling.sum() // 1
rolling.average() // 1
rolling.push(2)
rolling.sum() // 3
rolling.average() // 1.5
rolling.push(3)
rolling.sum() // 6
rolling.average() // 2

// once the size is reached, it will calculate a rolling value
rolling.push(4)
rolling.sum() // 9 (i.e. 2 + 3 + 4)
rolling.average() // 3
rolling.push(5)
rolling.sum() // 12
rolling.average() // 4
```

You can also use a custom reducer:

```js
import Rolling from '../src/index.js'
const sum = (x, y) => x + y
const rolling = Rolling(3, sum)

rolling.push(1)
rolling.reduce() // 1
rolling.push(2)
rolling.reduce() // 3
rolling.push(3)
rolling.reduce() // 6
rolling.push(4)
rolling.reduce() // 9
rolling.push(5)
rolling.reduce() // 12
```


## License

ISC © [Raine Revere](https://github.com/raineorshine)
