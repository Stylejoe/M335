
    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        document.getElementById("x").value =  latitude;
        document.getElementById("y").value =  longitude;  
                     
    }

    var onWeatherSuccess = function (position) {
    console.log("onWeatherSuccess");
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getWeather(Latitude, Longitude);
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    function onWeatherError()
    {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    function getWeather(latitude, longitude)
    {
        console.log("getWeather");
        var OpenWeatherAppKey = "22eab7dcbbe43e1135bdfa1db69966ac";
        var queryString =
        'http://api.openweathermap.org/data/2.5/weather?lat='
        + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=imperial';    

        $.getJSON(queryString, function (results) {

            if (results.weather.length) {

                    $('#city').html(results.name);
                    $('#temp').text(results.main.temp);
                    $('#wind').text(results.wind.speed);
                    $('#humidity').text(results.main.humidity);
                    $('#visibility').text(results.weather[0].main);

                    var sunriseDate = new Date(results.sys.sunrise);
                    $('#sunrise').text(sunriseDate.toLocaleTimeString());

                    var sunsetDate = new Date(results.sys.sunrise);
                    $('#sunset').text(sunsetDate.toLocaleTimeString());
        }
    }).fail(function () {
        console.log("error getting location");
    });  
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
    function getWeatherLocation() {
        console.log("getWeatherLocation");
    navigator.geolocation.getCurrentPosition
    (onWeatherSuccess, onWeatherError, { enableHighAccuracy: true });
    }
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 }, {enableHighAccuracy: true});