// IMPORTS
const express = require("express");
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const passport = require('passport');

const app = express();

// MIDDLEWARE
app.use(passport.initialize());
require('./config/passport')(passport);
// app.get("/", (req,res) => res.send("Hello Korld"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

const db = require(`./config/keys`).mongoURI;
console.log(db)

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/tweets", tweets);
