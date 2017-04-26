const express = require("express");
const session = require('express-session');
const expressValidator = require("express-validator");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");

//database file
const config = require("./config/config");

//database connection
mongoose.connect(config.database)

//on databse connection
mongoose.connection.on("connected", () => {
  console.log("Server connected to database: " + config.database);
})

//on databse error
mongoose.connection.on("error", (err) => {
  console.log(err);
})

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport/passport")(passport);

//express session
app.use(session({
  secret: "mysecret",
  resave: true,
  saveUninitialized: true
}))

//express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      let namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//static files
app.use(express.static(path.join(__dirname, "public")));

//raincheck
const raincheckRoute = require("./routes/raincheck");
app.use("/raincheck", raincheckRoute);

//index
const index = require("./routes/index");
app.use("/", index);

//global variables
global.token = null;
global.user = null;

//port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port: " + port);
})
