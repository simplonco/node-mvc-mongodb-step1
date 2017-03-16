//notre serveur http
const express = require('express');
const routes = require('./routes.js');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");// www.google.com monsite.com 143.45.78.23
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(routes);

app.listen(3000, (err) => {
  console.log('yaaaaaaay');
})