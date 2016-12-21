var dispatcher = require("../dispatcher");
var currencyService = require("../services/currencyService");

function CurrencyStore() {
    var listeners = [];

    function onChange(listener) {
        getCurrencies(listener);
        listeners.push(listener);
    }

    function getCurrencies(cb){
        currencyService.getCurrencies().then(function (res) {
            cb(res);
        });
    }

    function addCurrency(currency) {
        currencyService.addCurrency(currency).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteCurrency(currency) {
        currencyService.deleteCurrency(currency).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getCurrencies(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "currency") {
            switch (split[1]) {
                case "addCurrency":
                    addCurrency(payload.currency);
                    break;
                case "deleteCurrency":
                    deleteCurrency(payload.currency);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = CurrencyStore();
