var http = require("http");

console.log("server is starting");
var server = http.createServer(function(request, response) {
	console.log("writting response");
	response.writeHead(200, {"Content-type" : "text/plain"});
	response.end("Hello world");
});

console.log("calling listner");
server.listen(8080);

console.log("Server started");

