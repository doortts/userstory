/**
 * Created by SW.CHAE.
 * User: doortts (blog.doortts.com)
 * Date: 12. 2. 26
 * Time: 오후 7:11
 */

var connect = require('connect');

var server = connect.createServer();
server.use(connect.router(function(app){
	app.get('/Home/Index', function(request, response, next) {
		response.writeHead(200, {'Content-Type':'text/html'});
		response.write('<h1>Index page</h1>');
		response.end();
	})
}));

server.use(connect.static(__dirname + '/Resources'));

server.listen(8888, function() {
	console.log('server running');
})
