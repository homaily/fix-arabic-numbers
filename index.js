'use strict';


exports = module.exports = search;
exports.connect = connect;
exports.params = params;



function search(val) {

  if (!val)
    return val;

  var type = typeof val;

  if (type === 'string') {
    val = fix(val);
  } else if (type === 'object' && val.constructor === Array) {
    for (var i = 0; i < val.length; i++) {
      val[i] = search(val[i]);
    }
  } else if (type === 'object') {
    var keys = Object.keys(val);
    for (var i = 0; i < keys.length; i++) {
      val[keys[i]] = search(val[keys[i]]);
    }
  }

  return val;

}



function fix(val) {

  return String(val)
          .replace(/٠/g, '0')
          .replace(/١/g, '1')
          .replace(/٢/g, '2')
          .replace(/٣/g, '3')
          .replace(/٤/g, '4')
          .replace(/٥/g, '5')
          .replace(/٦/g, '6')
          .replace(/٧/g, '7')
          .replace(/٨/g, '8')
          .replace(/٩/g, '9')
          .replace(/٪/g, '%')
          .replace(/ـ/g, '_');

}



function connect(req, res, next) {

  req.body = search(req.body);
  req.query = search(req.query);
  req.params = search(req.params);

  next();

}



function params(req, res, next) {

  req.params = search(req.params);

  next();

}
