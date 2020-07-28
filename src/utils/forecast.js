const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e680e6db6b0744db2668c9eb136d21a9&query=' + latitude + ',' + longitude;

    request({url, json: true}, (error, {body} ={}) => {
        if(error) {
            callback('Unable to connect to services.');
        }
        else if(body.error) {
            callback('Unable to find, please try another location');
        }
        else {
            callback(undefined, 'Weather description: ' + body.current.weather_descriptions[0] + ', Temperature(C): ' + body.current.temperature + ', Feels like temperature(C): ' 
            + body.current.feelslike + ', Humidity: ' + body.current.humidity + '%.');
        }
    });
}

module.exports = forecast;