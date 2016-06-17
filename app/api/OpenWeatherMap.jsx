var axios = require('axios');

const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=5862c04f4e8e11baaec98467c61cdbd1';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(res){
      debugger;
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }
      else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
