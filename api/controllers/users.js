'use strict';

const users  = {
 // Lister les différentes méthodes

  find : (req, res) => {
    // On veut créer un nouvel utilisateur on va donc à priori avoir besoin de la base de données ici
    res.send('This is where we will handle the database');
  }

}

module.exports = users;