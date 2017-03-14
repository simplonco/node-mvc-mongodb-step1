'use strict';


const db = require('../../database');

const users  = {
 // method...

  create : (req, res) => {
    // var newUser = new UserSchema({ email: 'sdsjh.dhf@dhfg.com' })
    const newUser = new db.users(req.body);
    newUser.save()
    .then ( data => {
      res.send(`Operation succeeded : \n ${data}`);
    })
    .catch ( err => {
      res.send('Operation failed : \n' + err);
    });
  }

}

module.exports = users;