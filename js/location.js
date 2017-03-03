  var lastLat = null;
  var lastLong = null;


  
   //round function for writeData
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

    //Bei erfolgreiche Lokalisierung des Users, wird die Funktion onSucces aufgerufen
    function onSuccess(position) {
        console.log("onSuccess");
        
        //Erfassung der Koordinaten
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        initMap(latitude,longitude);

        //Einschreiben der Koordinaten in die Inputfelder
        document.getElementById("x").value =  latitude;
        document.getElementById("y").value =  longitude;
        
        getWeather(latitude, longitude); 

        //Auf zwei stellen wird gerundet und verglichen ob ein neuer Eintrag in DB hinein soll.     
        if(round(lastLat, 2) != round(latitude, 2))
        {
            $("#x").change();           
        }
        else if(round(lastLong, 2) != round(longitude, 2))
        {
             $("#y").change();            
        }

        //Die Koordinaten werden zwischengespeichert
        lastLat = latitude;
        lastLong = longitude;
        
    }
    //Falls die Lokalisierung fehlschlägt
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    //Erfassung der Wetterdaten
    function getWeather(latitude, longitude)
    {
        //openweathermap.org bittet eine Einbettung von Wettererfassung
        console.log("getWeather");
        //Unser API key von OpenWeathermap.org
        var OpenWeatherAppKey = "22eab7dcbbe43e1135bdfa1db69966ac";
        //Abfrage von den Wetterdaten
        var queryString =
        'http://api.openweathermap.org/data/2.5/weather?lat='
        + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=metric';    

        //Rückgabe von den Werten
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