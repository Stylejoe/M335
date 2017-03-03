/*function initCoords() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initMap, locationError);
  } else {
    showError("Your browser does not support Geolocation!");
  }
}*/


var map;
var user = firebase.auth().currentUser;
function initMap(latitude, longitude) {

  console.log("MAPSUCCESS");


    user = firebase.auth().currentUser;

console.log(latitude + " = lat, "+ longitude + " = long");
    var myLatLng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};

    
    console.log(parseFloat(latitude) + " = lat, "+ parseFloat(longitude) + " = long");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: parseFloat(latitude), lng: parseFloat(longitude)},
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

    // Create a marker and set its position.
  var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: userEmail
  });
}
  



