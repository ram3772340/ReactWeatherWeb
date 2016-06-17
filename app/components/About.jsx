var React = require('react');

var About = (props) =>{
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Wherever you are, and whatever your plans, you’re always prepared with the latest weather forecast from Weather App.</p>
      <p>
        Here are the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org/">Open Weather Map</a> - This was used to search for weather by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
