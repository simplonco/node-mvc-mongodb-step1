'use strict';

// Toutes les urls qui arrivent ici correspondent à www.site.com/api
const {Router} = require('express');
const bodyParser = require('body-parser');

// L'api récupère les controllers qui l'intéressent
const users = require('./controllers/users');

// Elle crée un nouveau routeur/embranchage rien que pour notre api
const apiRoutes = new Router();

// On utilise bodyParser pour mieux parse les urls et leurs params/body
apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

// Lorsque l'utilisateur fait une requete GET à l'url www.site.com/api/users
// On appelle la méthode `find` du controller users 
apiRoutes.get('/users', (req, res) => {
  users.find(req, res)
});

module.exports = apiRoutes