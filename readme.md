# valid-file

> Check if a file is a file.

[![Build Status](https://travis-ci.org/radiovisual/valid-file.svg?branch=master)](https://travis-ci.org/radiovisual/valid-file) [![Coverage Status](https://coveralls.io/repos/github/radiovisual/valid-file/badge.svg?branch=master)](https://coveralls.io/github/radiovisual/valid-file?branch=master)

Returns `true` if the path points to a valid file, otherwise, return `false`. 

## Install

```
$ npm install --save valid-file
```


## Usage

```js
const validFile = require('valid-file');
```

#### Async

```js
validFile('path/to/valid/file.txt', valid => {
    console.log(valid);
});
//=> true
```

#### Sync

```js
validFile.sync('path/to/valid/file.txt');
//=> true
```


## API

### validFile(path, cb)

#### path

Type: `string`

The path to the file you are verifying.

#### cb

Type: `function`  

Returns a single boolean indicating if the file is valid.

### validFile.sync(path)

Returns: `Boolean`  

The synchronous version of `validFile()`. No callback is supplied.


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
