// Server.js

/*
  Primer borrador API de webapp "app-futbol"
*/

// modulos ==================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 8080;

// get all data of body (POST) parameters
// parse app/json
app.use(bodyParser.json());

// parse app/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with X-HTTP-METHOD-OVERRIDE header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set static files locations
app.use(express.static(__dirname + '/public'));

// rutas ==================================================
require('.rutas')(app);

// start app ==================================================
// startu la app en http://localhost:8080
app.listen(port);

// aviso al usuario
console.log('Estoy escuchando en ' + port);

// expose app
exports = module.exports = app;