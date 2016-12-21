var mongoose = require("mongoose");
var pairsSchema = mongoose.Schema({
    pairs: String
});

module.exports = mongoose.model("pairs", pairsSchema);
