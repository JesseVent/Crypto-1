var mongoose = require("mongoose");
var currenciesSchema = mongoose.Schema({
    name: String,
    tagline: String
});

module.exports = mongoose.model("currencies", currenciesSchema);
