'use strict';

const {Router} = require('express');
const api = require('./api');

const apiRoutes = new Router();
// pour définir les routes

const routes = function (app) {

  app.use('/api', apiRoutes);

  apiRoutes.get('/users', function (req, res){
    // Selon la route appele la methode qui nous interesse
    api.users.find();
  });

  apiRoutes.post('/users', function (req, res){
    // Selon la route appele la methode qui nous interesse
    api.users.update();
  });

}

module.exports = routes;