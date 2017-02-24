
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
        getMap(latitude,longitude);
    }

    function getMap(latitude, longitude) {
        console.log("getMap success");
        var mapOptions = {
            center: new google.maps.LatLng(0,0),
            zoom: 1,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);


        var latLong = new google.maps.LatLng(latitude, longitude);

        var marker = new google.maps.Marker({
            position: latLong
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