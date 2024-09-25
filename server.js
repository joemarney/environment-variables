require("dotenv").config();
const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("The server is running");
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});
