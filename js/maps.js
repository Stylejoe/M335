function watchMapPosition() {

    return navigator.geolocation.watchPosition
        (initMap, MapError, { enableHighAccuracy: true });
}

var map;
function initMap(position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;


    //console.log(latitude + " = lat, "+ longitude + " = long");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: 8
  });
}


