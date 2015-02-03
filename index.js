
var path = require('path');
var through = require('through2');
var cssstats = require('cssstats');

module.exports = function(options) {

  options = options || {};

  return through.obj(function(file, encoding, callback) {

    if (!file.isBuffer()) callback();

    var src = file.contents.toString();
    var obj = cssstats(src, options);

    file.contents = new Buffer(JSON.stringify(obj, null, 2));

    file.path = path.join(path.dirname(file.path), path.basename(file.path, path.extname(file.path)) + '.json');

    this.push(file);
    callback();

  });

};
