const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

dotenv.config({ path: "./config.env" });

// Connecting Database
const DB = process.env.DB_CONNECTION;
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Established");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Welcome to the home route");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about route");
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
