var React = require("react");
var ReactDOM = require("react-dom");
var CurrenciesList = require("./components/CurrenciesList.jsx");
var PairsList = require("./components/PairsList.jsx");
var currenciesStore = require("./stores/currenciesStore");
var _currencies = [];
var getCurrenciesCallback = function(currencies){
    _currencies = currencies;
    render();
};
currenciesStore.onChange(getCurrenciesCallback);

function render(){
    ReactDOM.render(
    <PairsList />, document.getElementById("live-stream"));
    ReactDOM.render(
    <CurrenciesList currencies={_currencies} />, document.getElementById("user-content"));
}
