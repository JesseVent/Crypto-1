var mongoose = require("mongoose");
var currencySchema = mongoose.Schema({
    name: String,
    tagline: String
});

module.exports = mongoose.model("currency", currencySchema);