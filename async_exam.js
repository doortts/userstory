

// counter sync method

var fs = require('fs');
var events = require('events');

var path1 = "./",
    path2 = ".././",
    logCount,
    counter = 2,
    totals = 0;
var emitter = new events.EventEmitter();

function countFiles(path, callback) {
    fs.readdir(path, function (err, filenames) {
        callback(err, path, filenames.length);
    });
}

logCount = function (err, path, count) {
    console.log(count + " files in " + path);
    totals += count;
    counter--;
    if (counter == 0){
    	emitter.emit('done');
    }
};

countFiles(path1, logCount); 
countFiles(path2, logCount);

emitter.on('done', function(){
	console.log("total: " + totals);	
});
