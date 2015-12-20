# fix-arabic-numbers
Replace arabic numbers with engilsh ones.




### How to use

Simply pass String, Object or Array.


```js
var fixArabicNumbers = require('fix-arabic-numbers');

fixArabicNumbers('١٢٣٤٥٦٧٨٩٠ـ٪'); // return '1234567890_%'

fixArabicNumbers(['١', '٢', 'test ٣', 'تجربة ٤']); // return ['1', '2', 'test 3', 'تجربة 4']

fixArabicNumbers({test: '١٢٣٤'}); // return {test: '1234'}
```




#### How to use with Expressjs

You can use the module as a connect middleware to fix `req.body` and `req.query`


```js
var express = require('express');
var fixArabicNumbers = require('fix-arabic-numbers');

var app = express();

// if you use body-parser. use the middleware after you use body-parser.
app.use(fixArabicNumbers.connect)

app.get('/', function (req, res) {
  // ...
})

```




#### How to fix Expressjs `req.params`

Please not that `req.params` are processed by express router. to fix `req.params` you could use `fixArabicNumbers.params` middleware


```js
var express = require('express');
var fixArabicNumbers = require('fix-arabic-numbers');

var app = express();

app.get('/', fixArabicNumbers.params, function (req, res) {
  // ...
})

```





## License

[MIT](LICENSE)
