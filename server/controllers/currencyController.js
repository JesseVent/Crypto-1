var mongoose = require("mongoose");
var Currency = require("../data/currency");
var _ = require("underscore");

var router = require("express").Router();
router.route("/currencies/:id?").get(getCurrencies).post(addCurrency).delete(deleteCurrency);

function getCurrencies(req, res) {
    Currency.find(function (err, currencies) {
        if (err)
            res.send(err);
        else
            res.json(currencies);
    });
}

function addCurrency(req, res) {
    var currency = new Currency(_.extend({}, req.body));
    currency.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(currency);
    });
}

function deleteCurrency(req, res) {
    var id = req.params.id;
    Currency.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
