const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Raincheck = require("../models/raincheckModel");

router.get("/", (req, res) => {

  Raincheck.find({}, (err, rainchecks) => {
    if(err) throw(err);
    if(!rainchecks || rainchecks.length === 0) {
      return res.send({message: "no rainchecks found"})
    }
    else {
      return res.send(rainchecks);
    }
  })
});

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
     let mm = today.getMonth()+1; //January is 0!
     let yyyy = today.getFullYear();

     if(dd<10) {
         dd='0'+dd
     }
     if(mm<10) {
         mm='0'+mm
     }
     today = mm+'/'+dd+'/'+yyyy;

  let newRaincheck = new Raincheck({
    id: req.body.id,
    name: req.body.name,
    phone: editedPhone,
    merchandise: req.body.merchandise,
    comments: req.body.comments,
    time: today
  })

  newRaincheck.save(newRaincheck, (err) => {
    if(err) throw err;
    res.send({message: newRaincheck.name + "'s order has been added" + newRaincheck});
  })
});

router.post("/delete", (req, res) => {
  Raincheck.find({_id: req.body.id}, (err, found) => {
    if(err) throw err;
  }).remove((err) => {
    if(err) throw err;
    console.log("deleted");
    res.send("deleted");
  })
})



module.exports = router;
