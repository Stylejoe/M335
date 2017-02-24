
    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function MapSuccess(position) {
        console.log("MapSuccess");

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log(latitude);
        console.log(longitude);
        google.maps.event.addDomListener(window, 'load', initialize);
        //getMap(latitude,longitude);
    }

    function initialize() {
        console.log("getMap success");
        var latLong = new google.maps.LatLng(47.000, 9.000);
        var mapOptions = {
            center: new google.maps.LatLng(0,0),
            zoom: 1,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);


        var marker = new google.maps.Marker({
            position: latLong
        });

        map.addListener('center_changed', function() {
            // 3 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(function() {
            map.panTo(marker.getPosition());
            }, 3000);
        });

        marker.addListener('click', function() {
            map.setZoom(8);
            map.setCenter(marker.getPosition());
        });

        marker.setMap(map);
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        }
    function MapError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    function watchMapPosition() {

        return navigator.geolocation.watchPosition
        (MapSuccess, MapError, { enableHighAccuracy: true });
    }