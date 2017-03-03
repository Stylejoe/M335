var user = firebase.auth().currentUser;


//Funktion zur Erstellung der Map
function initMap(lat, long) {

    console.log("initMap");

    user = firebase.auth().currentUser;
    myLatLng = {lat: parseFloat(lat), lng: parseFloat(long)}
    console.log(parseFloat(lat) + " = lat, "+ parseFloat(long) + " = long");
    var map = new google.maps.Map(document.getElementById('map'), { //Eigenschaften unserer generierten Map
    center: myLatLng,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // Erstellen eines Markers, zum Anzeigen wo der User steht
  var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: userEmail
  });
}
  



