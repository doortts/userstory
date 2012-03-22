// git blob creation prototype
// 2012.03.19 CHAE.SW
//
// git blob object sha1 message creation rule
// sha1("blob " + filesize + "\0" + data)
//
// ex>
// cat hello.txt
// hello nekure
//
// git hash-object hello.txt
// 37706c351c7afbb4b0e1cb58ff7440294060dd76
// 
// node git_blob_sha1key_creation.js hello.txt
// 37706c351c7afbb4b0e1cb58ff7440294060dd76
//
var crypto = require('crypto');
var fs = require('fs');
var util = require('util');

function gitHashValue(filename, cb){
	var shasum = crypto.createHash('sha1');
	var BLOB_HEADER_FORMAT = "blob %s\0";

	fs.stat(filename, function (err, stats) {
	    if (err) throw err;
	    var BLOB_HEADER = util.format(BLOB_HEADER_FORMAT, stats.size);
	    shasum.update(BLOB_HEADER);
		
		fs.readFile(filename, function (err, data) {
			shasum.update(data);
			cb(shasum.digest('hex'));
		});
	});
}

exports.hashValue = gitHashValue;
