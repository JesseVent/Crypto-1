var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    path = require("path"),
    logger = require('morgan')('dev');

//controllers
var currencyController = require("./controllers/currencyController");
var promises = require("./data/promises");

//Express request pipeline
var app = express();
app.use(logger);
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use("/api", currencyController);



app.listen(7777, function () {
    console.log("Started listening on port", 7777);
});

mongoose.connect("mongodb://localhost/currencyfinder");
