/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes')
	, socket = require('socket.io');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);

app.listen(8888);
var lastConnectedId = 0;
var io = socket.listen(app);
io.set('log level', 2);

io.sockets.on('connection', function(socket) {
	var name;

	socket.on('setname', function (data) {
		socket.set('name', data);
		name = data;
		socket.emit('responsename', name);
	});

	socket.on('getname', function(error, data) {
		socket.emit('responsename', name);
	});

	socket.on('join', function(data) {
		socket.join(data);
		socket.set('room', data);
	});

	socket.on('message', function(data) {
		socket.get('room', function(error, room) {
			io.sockets.in(room).emit('message', data);
		})
	});
});



console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
