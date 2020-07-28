const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e680e6db6b0744db2668c9eb136d21a9&query=' + latitude + ',' + longitude + '&units=f';

    request({url, json: true}, (error, {body} ={}) => {
        if(error) {
            callback('Unable to connect to services.');
        }
        else if(body.error) {
            callback('Unable to find, please try another location');
        }
        else {
            callback(undefined, {
                weather: body.current.weather_descriptions[0],
                current_temp: body.current.temperature,
                feels_like_temp: body.current.feelslike
            });
        }
    });
}

module.exports = forecast;