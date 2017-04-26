const express = require("express");
const mongoose = require("mongoose");
const config = require("../config/config");
const bcrypt = require("bcryptjs");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},
{
  collection: "users"
}
);

const User = module.exports = mongoose.model("User", UserSchema);

module.exports.saveUser = function(newUser, callback) {
  bcrypt.hash(newUser.password, 10, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    })
};

module.exports.findUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.findUserByUsername = function(username, callback) {
  let query = {username: username}
  User.findOne(query, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, result) => {
    if(err) throw err;
    callback(null, result);
  })
}
