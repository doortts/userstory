/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes');

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

var models = [];
var counter = 0;

// Routes
app.get('/', routes.index);
app.get('/messages', function(req, res){
    res.json( models);
});

app.post('/messages', function(req, res){
  var receivedModel = req.body;
  receivedModel.id = counter++;
  models.push( receivedModel );

  res.json(models);
});

app.listen(8888);


console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
