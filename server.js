// Server.js

/*
  Primer borrador de webapp que devuelve "hola soy app-futbol"
  ante una peticion
*/

// Dependencias
var express = require('express');
//var http = require('http');

var app = express()
//var server = http.createServer(app);

app.get('/', function(request, respond) {
    respond.send('hola soy app-futbol');
});

/*server.listen(3000, function(){
    console.log('Node server corriendo en http://localhost:3000');
});*/ 

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port
    console.log('App escuchando en http://%s:%s', host, port);
});

