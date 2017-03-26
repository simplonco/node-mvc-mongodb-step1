'use strict';

const {Router} = require('express');
const express = require('express');

// On récupère notre api
const api = require('./api');

// On va créer le routeur principale de notre app
const routes = new Router();

// Ce routeur utilisera l'api si on va sur l'api
routes.use('/api', api);

// Sinon il envoie la partie client de notre site
routes.use(express.static('./public'));

module.exports = routes;