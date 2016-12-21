var dispatcher = require("../dispatcher");

module.exports = {
    addCurrency:function(currency){
        dispatcher.dispatch({
           currency:currency,
           type:"currency:addCurrency"
        });
    },
    deleteCurrency:function(currency){
        dispatcher.dispatch({
           currency:currency,
           type:"currency:deleteCurrency"
        });
    }
}
