var step = require('step');
var fs = require('fs');

var a = function(name, cb){
	console.log('entering a');
	cb( "<" + name + ">");
}

step(
	function b(){
		console.log('b');
		a('hello.txt', this);
	},
	function c(data, err){
		console.log(">>"+data);
		if(err) throw err;
	}
	);

console.log('ending');