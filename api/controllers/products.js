'use strict';

const db = require('../../database');

const products =  {

  find : function (req, res) {
    db.products.find({name: req.params.name})
    .then( data => {
      res.send('Operation completed ' + data);
    })
    .catch( err => {
      res.send('Operation failed :: ' + err)
    });
  }

}

module.exports = products;