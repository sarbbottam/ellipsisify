ellipsisify
---

[![build status](https://travis-ci.org/sarbbottam/ellipsisify.svg?branch=master)](https://travis-ci.org/sarbbottam/ellipsisify)
[![coverage status](https://coveralls.io/repos/sarbbottam/ellipsisify/badge.svg?branch=master&service=github)](https://coveralls.io/github/sarbbottam/ellipsisify?branch=master)

## Demo:

Please refer this [pen](http://codepen.io/sarbbottam/full/JYKbXP/) to see it in action or to play around.

## Usage:

NodeJS

```js
var ellipsisify = require('path/to/ellipsisify');
console.log(ellipsisify.center('abcdefghij', 8)); // abc...ij
console.log(ellipsisify.left('abcdefghij', 8)); // ...fghij
console.log(ellipsisify.right('abcdefghij', 8)); // abcde...
```

Browser

```html
<html>
  ...
    <script src="path/to/ellipsisify.js"></script>
  ...
  <script>
    console.log(ellipsisify.center('abcdefghij', 8)); // abc...ij
    console.log(ellipsisify.left('abcdefghij', 8)); // ...fghij
    console.log(ellipsisify.right('abcdefghij', 8)); // abcde...
  </script>
</html>
```

---

## API

```js
ellipsisify.center(string, threshold);
ellipsisify.left(string, threshold);
ellipsisify.right(string, threshold);
```

