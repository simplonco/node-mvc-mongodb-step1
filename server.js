'use strict';

// global.test = 'test';

// console.log(global.test);
// L'entrée de notre application.
// A chaque fois que je veux accéder à mon site il utilisera ce serveur pour traiter ma demande.

// Express est le serveur http qui écoute les requêtes et y répond
const express = require('express');

// Route est un bout de code qui va nous envoyer vers l'api ou le site selon notre besoin
const routes = require('./routes.js');

// On déclare l'app
const app = express();

// On lui défini du middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");// www.google.com monsite.com 143.45.78.23
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//On défini ses routes
app.use(routes);

// Et on la démarre
app.listen(3000, (err) => {
  console.log('App listening on port 3000');
});