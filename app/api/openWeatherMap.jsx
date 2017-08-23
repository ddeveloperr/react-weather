var axios = require('axios');
// units=metric is for Celsius unit (EU)
const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?APPID=b0d94ac3d2c66d73c3b095716e2ca43c&units=metric';
// units=imperial is for F unit (US)
// const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?APPID=b0d94ac3d2c66d73c3b095716e2ca43c&units=imperial';
// b0d94ac3d2c66d73c3b095716e2ca43c

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log(requestUrl);

    return axios.get(requestUrl).then(function (res) {
        
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}