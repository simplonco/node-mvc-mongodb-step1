'use strict';

const {Router} = require('express');
const api = require('./api');

//api.users.create

const bodyParser = require('body-parser');

const apiRoutes = new Router();
// pour définir les routes

apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

apiRoutes.get('/users', function (req, res) {
  // method de controller pour user get
});


// methode post localhost:3000/api/users
apiRoutes.post('/users', function (req, res) {
  api.users.create(req, res);
})

module.exports = apiRoutes;