var React = require("react");
var actions = require("../actions/CurrencyActions");

module.exports = React.createClass({
    deleteCurrency: function(e){
        e.preventDefault();
        actions.deleteCurrency(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteCurrency}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.tagline}</div>
            </div>
        )
    }
})
