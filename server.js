const express = require("express");
const app = express();

require("dotenv").config();

const bodyParse = require("body-parser");
app.use(bodyParse.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is ok!");
});
