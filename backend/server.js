const config = require("config");
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const userController = require('./controllers/user.controller');
// const bodyParser = require('body-parser');

var router = express.Router();

require('dotenv').config();

const app = express();
const port = process.env.PORT;

if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use('/user', userController);


const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});