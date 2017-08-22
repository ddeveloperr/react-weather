var React = require('react');

var WeatherMessage = (props) => {
  
  var {location, temp} = props;
  return (
      <h3>It's it {temp} in {location}.</h3>
    );
};

module.exports = WeatherMessage;