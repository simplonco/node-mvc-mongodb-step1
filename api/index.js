'use strict';

const users = require('./controllers/users');
const products = require('./controllers/products');

const apiRoutes = new Router();

const bodyParser = require('body-parser');

apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

// methode post localhost:3000/api/users
apiRoutes.post('/users', users.create);

// methode post localhost:3000/api/users
apiRoutes.get('/products/:name', products.find);

module.exports = apiRoutes