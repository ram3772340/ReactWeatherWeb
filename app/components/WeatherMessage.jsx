var React = require('react');
//
// var WeatherMessage = React.createClass({
//   render:function(){
//     // var location = this.props.location;
//     // var temp = this.props.temp;
//     var {temp, location} = this.props;
//
//     return(
//     <div>
//       <h3>It is {temp} in {location}.</h3>
//     </div>
//   );
//   }
// });


var WeatherMessage = ({temp, location}) => {
  return(
  <div>
    <h3>It is {temp} in {location}.</h3>
  </div>
)
};

module.exports = WeatherMessage;
