const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the home route");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about route");
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
