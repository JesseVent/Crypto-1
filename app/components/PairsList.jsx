var React = require("react");
var CurrencyInfo = require("./CurrencyInfo.jsx")
var AddCurrency = require("./AddCurrency.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    Cryptocurrency List will be here!
                </div>
                <div className="col-md-6">
                    The data will come from a promise stream
                </div>
           </div>
       )
   }
});
