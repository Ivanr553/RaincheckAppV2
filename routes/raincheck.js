const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Raincheck = require("../models/raincheckModel");
const passport = require("passport");
const LocalPassport = require("passport-local").Strategy


//retreiving rainchecks depending on user
router.post("/", (req, res) => {
  Raincheck.find({userid: req.body.userid}, (err, rainchecks) => {
    if(err) throw(err);
    if(!rainchecks || rainchecks.length === 0) {
      return res.send({message: "no rainchecks found"})
    }
    else {
      return res.send(rainchecks);
    }
  })
});


//ading rainchecks
router.post("/add", (req, res) => {

  //formatting phone string
  let editedPhone = req.body.phone;
  editedPhone =
       "("
     + editedPhone.substring(0, 3)
     + ") "
     + editedPhone.substring(3, 6)
     + "-"
     + editedPhone.substring(6, 10);

   //create time for the raincheck
   let today = new Date();
   let dd = today.getDate();
   let mm = today.getMonth()+1;
   let yyyy = today.getFullYear();
   if(dd<10) {
       dd='0'+dd
   }
   if(mm<10) {
       mm='0'+mm
   }
   today = mm+'/'+dd+'/'+yyyy;

  //constructing new raincheck
  let newRaincheck = new Raincheck({
    userid: req.body.userid,
    name: req.body.name,
    phone: editedPhone,
    merchandise: req.body.merchandise,
    comments: req.body.comments,
    time: today
  })

  //saving raincheck to database and sending response
  newRaincheck.save(newRaincheck, (err) => {
    if(err) throw err;
    res.send({
      message: newRaincheck.name + "'s order has been added" + newRaincheck
    });
  })
});


//deleting rainchecks
router.post("/delete", (req, res) => {

  //finding raincheck using _id
  Raincheck.find({_id: req.body.id}, (err, found) => {
    if(err) throw err;
  })
    .remove((err) => {
      if(err) throw err;
      console.log(found.name + "deleted");
      res.send(found.name + "deleted");
    })
})



module.exports = router;
