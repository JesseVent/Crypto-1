var React = require("react");
var actions = require("../actions/CurrencyActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:""
      }
    },
    addCurrency:function(e){
        e.preventDefault();
        actions.addCurrency(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addCurrency}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Favorite Cryptocurrency:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Currency Name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">What is best about this Cryptocurrency?</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Type your description" />
                </div>
                <div className="form-group">
                    <button className="btn btn-p­rimary" type="submit">Add Comment</button>
                </div>
            </form>
        )
    }
})
