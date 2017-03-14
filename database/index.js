'use strict';

const mongoose = require('mongoose');

const users = require('./models/users');

mongoose.connect('mongodb://localhost:27017/test');

const db = {
  users: mongoose.model('Users', users)
}

module.exports = db;