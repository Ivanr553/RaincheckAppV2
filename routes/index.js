const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalPassport = require("passport-local").Strategy

//Mongoose Models
const User = require("../models/userModel");

//Index
router.get("/", (req, res) => {
  res.send("index");
})

//login
router.get("/login", (req, res) => {
  res.sendfile("./public/login.html");
})


//register route
router.post("/register", (req, res) => {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password
  })

  User.saveUser(newUser, (err, newUser) => {
    if (err) throw err;
    res.sendfile("./public/registered.html");
  })
})

//authenticate log in
router.post("/authenticate", passport.authenticate("local"), function(req, res) {
    res.send({
      "token": global.token,
       "user": global.user
     })
  });

//user account page
router.get("/profile", (req, res) => {
  res.send({message: "You now have access to your profile page"});
})

module.exports = router;
