const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let raincheckSchema = mongoose.Schema({
  userid: String,
  date: String,
  name: String,
  phone: String,
  merchandise: [],
  comments: String,
  time : String
},
{
  collection: "rainchecks"
});

let Raincheck = module.exports = mongoose.model("Raincheck", raincheckSchema);
