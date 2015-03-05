/**
 * Module Dependencies
 */

var Middleware = require('browserify-middleware');

/**
 * Export `bundle`
 */

module.exports = bundle;

/**
 * Initialize `bundle`
 *
 * @param {String|Array} path
 * @param {Object} options
 * @return {Generator}
 * @api public
 */

function bundle(path, options) {
  var middleware = Middleware(path, options);

  return function *browserify() {
    var req = this.req;
    var res = this.res;
    var end = res.end;

    this.body = yield function(next) {
      res.end = function(data) {
        res.end = end;
        next(null, data);
      }

      middleware(req, res, next);
    }
  }
}
