const convertToCelsius = function (fahrenheitTemp) {
  const convertedToCelsius = ((fahrenheitTemp - 32) * 5) / 9;
  // using Math.round(num * 10) / 10 this time...
  return Math.round(convertedToCelsius * 10) / 10;
};

const convertToFahrenheit = function (celsiusTemp) {
  const convertedToFahrenheit = (celsiusTemp * 9) / 5 + 32;
  // using Number.parseFloat and Number.toFixed this time...
  return Number.parseFloat(convertedToFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
