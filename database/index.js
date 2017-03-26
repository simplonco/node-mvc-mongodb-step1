'use strict';

// Initialiser la connection
//------------------------------------------------//
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
//------------------------------------------------//

// Construire les models
//------------------------------------------------//
const Schema = mongoose.schema

// /!\ N'oubliez pas d'importer chaque model créé.
const users = require('./models/users');

// /!\ N'oubliez pas d'ajouter chaque model créés à db
const db = {
  users: mongoose.model('Users', new Schema(users))
}
//------------------------------------------------//

// Exporter les models
module.exports = db;