var http = require('http');
var express = require('express');
var server;
var app = express();

server = http.createServer();

//Routing

app.get('/api/hello', function(request, response) {
	if('GET' === )
	response.send({ message: 'hello' });
});
server.on('request', app);

 server.on('listening', function() {
 	console.log('ready to accept requests')
 })




 //setting up express ---->
 //in console

 //mkdir myProject
 //pushd myProject     (aka cd , also --> popd)

//touch serve.js (server.js, app.js)

//npm init
//#then it asks 'Hard questions'

//npm istall --save 'express@4.x'
