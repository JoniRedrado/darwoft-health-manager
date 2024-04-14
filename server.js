const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require ("dotenv").config();
const { MONGO_URI } = process.env;

//Coneccion a DB
mongoose.connect(MONGO_URI, { 
}).then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log("DB connection error", err);
})


//Middleware
server.use(express.json());
server.use(bodyParser.json())
server.use(cors());


//Rutas



server.listen(3001, () => {
    console.log("Server is running on port 3001")
})