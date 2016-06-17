var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getDefaultProps:function(){
    return{
      isLoading: false
    };
  },
  getInitialState: function(){
    return{
      isLoading: false
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
    }, function(errorMessage){
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  },
  render: function(){
    // var location = this.state.location;
    // var temp = this.state.temp;
    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching the weather...</h3>;
      } else if (temp && location){
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});


module.exports = Weather;
