//notre serveur http
var express = require('express');
var routes = require('./routes.js');

var app = express();

app.use( function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");// www.google.com monsite.com 143.45.78.23
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//routes app.get app.all 
routes(app);

//... ->> controllers

// controllers --> requete base de donnees

//req.send()