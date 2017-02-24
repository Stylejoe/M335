var grundfunktionen = document.createElement('script');
grundfunktionen.type = 'text/javascript';
grundfunktionen.src = 'grundfunktionen.js';

var lastLat = null;
var lastLong = null;

function setData()
{

    var latitude = document.getElementById("x").value;
    var longitude = document.getElementById("y").value;
    console.log("ELEMENTE GEHOLT");

        if(latitude != null && longitude != null && latitude != "" && longitude != "")
        {   
            console.log("Vergleich " + lastLat + " und " + latitude) + " und nachher";    
            console.log("Vergleich " + lastLong + " und " + longitude) + ""
            if(round(lastLat, 3) != round(latitude, 3))
            {
                console.log("Vergleich " + lastLat + " und " + latitude) + " sie sind ungleich";
                writeHistoryData(latitude, longitude);
            }
            else if(round(lastLong, 3) != round(longitude, 3))
            {
                console.log("Vergleich " + lastLong + " und " + longitude) + " sie sind ungleich";
                 writeHistoryData(latitude, longitude);
            }
            console.log("IF drinn");
        } 

        lastLat = latitude;
        lastLong = longitude;
    
    
}

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}



function writeHistoryData(latitude, longitude)
{
    var time = firebase.database.ServerValue.TIMESTAMP;
    var locationHistory = {
        uid: "uid",
        latitude: latitude,
        longitude: longitude,
        time: time
    };

    var newHistoryKey = firebase.database().ref().child('historys').push().key;

    var updates = {};
    updates['/historys/' + newHistoryKey] = locationHistory;

    return firebase.database().ref().update(updates);
}