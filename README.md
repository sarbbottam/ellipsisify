ellipsisify
---

[![build status](https://travis-ci.org/sarbbottam/ellipsisify.svg?branch=master)](https://travis-ci.org/sarbbottam/ellipsisify)
[![coverage status](https://coveralls.io/repos/sarbbottam/ellipsisify/badge.svg?branch=master&service=github)](https://coveralls.io/github/sarbbottam/ellipsisify?branch=master)

## Demo:

Please refer this [pen](http://codepen.io/sarbbottam/full/XmKbZr/) to see it in action or to play around.

## Usage:

NodeJS

```js
var ellipsisify = require('path/to/ellipsisify');
console.log(ellipsisify.center('abcdefghij', 8)); // abc...ij
```

Browser

```html
<html>
  ...
    <script src="path/to/ellipsisify.js"></script>
  ...
  <script>
    console.log(ellipsisify.center('abcdefghij', 8)); // abc...ij
  </script>
</html>
```

---

## API

```js
ellipsisify.center(string, threshold);
```

