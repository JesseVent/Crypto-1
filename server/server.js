
var express = require('express'),
    logger = require('morgan')('dev'),
    Routes = require('./routes.js'),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    path = require("path");

var PORT = process.env.PORT || 1337;

var app = express();

// mount logger middleware
app.use(logger);

// controllers
var currencyController = require("./controllers/currencyController");

// mount static file server middleware
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json())
app.use("/api", currencyController);

// mount master routes
Routes(app);

app.listen(PORT, (error) => {
    if(error) {
        console.log("Server error: ", error);
    } else {
        console.log("Server started on port: ", PORT);
    }
});

// Connect to mongodb database
mongoose.connect("mongodb://localhost/Cryptocurrency");
