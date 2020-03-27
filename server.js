const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
//require server connection to establish connection between connection and server
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const allRoutes = require("./server/routes/Pet.routes");
allRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
