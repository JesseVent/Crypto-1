var React = require("react");
var CurrencyInfo = require("./CurrencyInfo.jsx")

module.exports = React.createClass({
   render(){
       return(
           <div className="row">
                <div className="col-md-6">
                    //We will add addCurrency functionality here
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
