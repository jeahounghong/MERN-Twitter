const express = require("express");
const mongoose = require('mongoose');
const app = express();

app.get("/", (req,res) => res.send("Hello Korld"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

const db = require(`./config/keys`).mongoURI;
console.log(db)

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));