//notre serveur http
const express = require('express');
const routes = require('./routes.js');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");// www.google.com monsite.com 143.45.78.23
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//routes app.get app.all 
app.use('/api', routes);

//... ->> controllers

// controllers --> requete base de donnees

//req.send()

app.use(express.static('./public'));

app.listen(3000, (err) => {
  console.log('yaaaaaaay');
})