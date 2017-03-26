'use strict';

const {Schema} = require('mongoose');

const Users = new Schema({
  mail: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  }
})

module.exports = Users;