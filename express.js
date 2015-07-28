var serve = require('serve-favicon');
var src = require('./');

module.exports = serve(src);
