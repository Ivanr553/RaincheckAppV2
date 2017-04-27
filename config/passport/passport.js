const express = require("express");
const passport = require("passport");
const User = require("../../models/userModel");
const LocalPassport = require("passport-local").Strategy;

module.exports = function(passport) {

  passport.use(new LocalPassport(
    function(username, password, done) {
      User.findUserByUsername(username, (err, user) =>{
        if(err) throw err;
        if(!user) {
          console.log("no user found")
          return done(null, false, {message: "Unknown user"});
        }
        User.comparePassword(password, user.password, (err, result) => {
          if(err) throw err;
          else if(result) {
            console.log("authenticated");
            global.token = user.id;
            global.user = user.username;
            return done(null, user);
          }
          else if(!result) {
            console.log("not authenticated");
            return done(null, false, {message:"incorrect password"});
          }
        })
      })
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findUserById(id, (err, user) => {
      done(err, user);
    })
  })

};
