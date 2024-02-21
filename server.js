const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db");
const { jwtAuthMiddleware } = require("./jwt");

const bodyParse = require("body-parser");
app.use(bodyParse.json());
const PORT = process.env.PORT || 3000;


// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.listen(PORT, () => {
  console.log("Server is ok!");
});
