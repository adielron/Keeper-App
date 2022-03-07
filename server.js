
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const _ = require('lodash')
const app = express();
const port = process.env.PORT || 3001
const cors = require('cors')
require('dotenv').config();

app.use(cors())
app.use(express.json())
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://'+process.env.dbName+':'+process.env.password+'@cluster0.sr6rk.mongodb.net/notesDB');

app.use("/", require("./routes/noteRoute"))

app.listen(port, function() {
  console.log("Server started on port "+port);
});
