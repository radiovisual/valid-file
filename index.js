'use strict';
var fs = require('fs');

module.exports = function (path, cb) {
	if (typeof path !== 'string') {
		throw new TypeError('true-file expects a path string');
	}

	fs.stat(path, function (err, stats) {
		if (err) {
			return false;
		}
		return cb(stats.isFile());
	});
};

module.exports.sync = function (path) {
	if (typeof path !== 'string') {
		throw new TypeError('true-file expects a path string');
	}

	try {
		return fs.statSync(path).isFile();
	} catch (err) {
		return false;
	}
};

