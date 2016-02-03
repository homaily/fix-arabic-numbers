# fix-arabic-numbers
Replace arabic numbers with engilsh ones.




### How to use

Simply pass a String, Object or an Array.


```js
var fixArabicNumbers = require('fix-arabic-numbers');

fixArabicNumbers('١٢٣٤٥٦٧٨٩٠ـ٪'); // return '1234567890_%'

fixArabicNumbers(['١', '٢', 'test ٣', 'تجربة ٤']); // return ['1', '2', 'test 3', 'تجربة 4']

fixArabicNumbers({test: '١٢٣٤'}); // return {test: '1234'}
```




#### How to use with Expressjs

You can use this module as a connect middleware to fix `req.body` and `req.query` by using `fixArabicNumbers.connect` middleware


```js
var express = require('express');
var fixArabicNumbers = require('fix-arabic-numbers');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// use connect middleware after using body-parser.
app.use(fixArabicNumbers.connect);


app.get('/', function (req, res) {
  // req.body & req.query now checked and fixed.
})

```




#### How to fix Expressjs `req.params`

`req.params` are processed by express router on requrst. to fix `req.params` you could use `fixArabicNumbers.params` middleware


```js
var express = require('express');
var fixArabicNumbers = require('fix-arabic-numbers');

var app = express();

app.get('/', fixArabicNumbers.params, function (req, res) {
  // req.params now checked and fixed.
})

```





## License

[MIT](LICENSE)
