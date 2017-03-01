var lastLat = null;
var lastLong = null;

 function round(zahl, nachkommastelle)
    {
        wert = parseFloat(zahl);
        if(!wert){
            return 0;
        }

        var umrechnungsnachstelle = Math.pow(10, nachkommastelle);

        wert = (Math.round(wert * umrechnungsnachstelle) / umrechnungsnachstelle);
        return wert;
    }

function onSuccess(position) {

        var user = firebase.auth().currentUser;
        if(!user)
        {
            return;
        }
        
       console.log("GetLocation Success");
 
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log("GECHANGED");
        document.getElementById("x").value =  latitude;
        document.getElementById("y").value =  longitude;
        getWeather(latitude, longitude); 

         console.log("Vergleich " + lastLat + " und " + latitude) + " und nachher";    
            console.log("Vergleich " + lastLong + " und " + longitude) + ""
        if(round(lastLat, 3) != round(latitude, 3))
        {
            console.log("Vergleich " + lastLat + " und " + latitude) + " sie sind ungleich";
            $("#x").change();           
        }
        else if(round(lastLong, 3) != round(longitude, 3))
        {
               console.log("Vergleich " + lastLong + " und " + longitude) + " sie sind ungleich";
             $("#y").change();            
        }

        lastLat = latitude;
        lastLong = longitude;    
    }

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    function getWeather(latitude, longitude)
    {
        console.log("getWeather");
        var OpenWeatherAppKey = "22eab7dcbbe43e1135bdfa1db69966ac";
        var queryString =
        'http://api.openweathermap.org/data/2.5/weather?lat='
        + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=metric';    

        $.getJSON(queryString, function (results) {

            if (results.weather.length) {

                    $('#city').html(results.name);
                    $('#temp').html(results.main.temp);
                    $('#wind').html(results.wind.speed);
                    $('#humidity').html(results.main.humidity);
                    $('#visibility').html(results.weather[0].main);

                    var sunriseDate = new Date(results.sys.sunrise);
                    $('#sunrise').html(sunriseDate.toLocaleTimeString());

                    var sunsetDate = new Date(results.sys.sunrise);
                    $('#sunset').html(sunsetDate.toLocaleTimeString());
            }
    }).fail(function () {
        console.log("error getting location");
    });  
    }

    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 }, {enableHighAccuracy: true});