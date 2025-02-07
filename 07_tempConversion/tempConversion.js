//formula to convert celsius into fahrenheit = (0°C × 9/5) + 32 = 32°F
//formula to convert fahrenheit into celsiu = (32°F − 32) × 5/9 = 0°C

//math round to round the number to the nearest decimal place
//

const convertToCelsius = function(fahren) {
  
  return Math.round((fahren - 32) * (5 / 9) * 10) / 10;

};

const convertToFahrenheit = function(cels) {

  return Math.round(((cels * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
