const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalPassport = require("passport-local").Strategy

//Mongoose Models
const User = require("../models/userModel");

//routing back to index
router.get("/add", (req, res) => {
  res.redirect("..");
});
router.get("/register", (req, res) => {
  res.redirect("..");
});
router.get("/login", (req, res) => {
  res.redirect("..");
});
router.get("/authenticate", (req, res) => {
  res.redirect("..");
});
router.get("/rainchecks", (req, res) => {
  res.redirect("..");
});

//Index
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '../public/index.html'));
})

//register route
router.post("/register", (req, res) => {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password
  });

  User.find({username: req.body.username}, (err, user) => {
    if(err) throw err;
    if(user) {
      return res.send({invalid: "Username " + req.body.username + " is already being used"})
    }
  })

  User.saveUser(newUser, (err, newUser) => {
    if (err) throw err;
    res.send({message: "User Registered"});
  })
});

// //authenticate log in
// router.post("/authenticate", passport.authenticate("local"), (req, res) => {
//   res.send({
//     "userid": global.userid,
//      "user": global.user
//    })
// });

router.post('/authenticate', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    return res.send(info)
  })(req, res, next);
});

//user account page
router.get("/profile", (req, res) => {
  res.redirect("..");
});

module.exports = router;
