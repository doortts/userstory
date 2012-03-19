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
var filename = process.argv[2];
var crypto = require('crypto');
var fs = require('fs');
var util = require('util');

var shasum = crypto.createHash('sha1');

fs.stat('hello.txt', function (err, stats) {
    if (err) throw err;

    var BLOB_HEADER = util.format("blob %s\0", stats.size);
    shasum.update(BLOB_HEADER);

	var stream = fs.ReadStream(filename);
	stream.on('data', function(d) {
	  shasum.update(d);
	});

	stream.on('end', function() {
	  var d = shasum.digest('hex');
	  console.log(d + '  ' + filename);
	});
});