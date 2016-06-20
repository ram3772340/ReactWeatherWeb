var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getDefaultProps:function(){
    return{
      isLoading: false
    };
  },
  getInitialState: function(){
    return{
      isLoading: false,
      errorMessage: undefined
    };
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({
      isLoading: true
    });

    debugger;

    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function(){
    // var location = this.state.location;
    // var temp = this.state.temp;
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching the weather...</h3>;
      } else if (temp && location){
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string'){
        return (
        <ErrorModal message={errorMessage} />
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});


module.exports = Weather;
