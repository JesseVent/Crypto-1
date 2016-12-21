var React = require("react");
var CurrencyInfo = require("./CurrencyInfo.jsx")
var AddCurrency = require("./AddCurrency.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddCurrency />
                </div>
                <div className="col-md-6">
                    {
                        this.props.currencies.map(function(s,index){
                            return(
                                <CurrencyInfo info={s} key={"currency"+index} />
                            )
                        })
                    }
                </div>
           </div>
       )
   }
});
