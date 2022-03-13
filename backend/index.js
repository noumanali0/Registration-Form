const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());

const port = 8000;
const users = [];

app.post("/home", (req, res) => {
  users.push(req.body);
  console.log(users);
  res.send("saving");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
