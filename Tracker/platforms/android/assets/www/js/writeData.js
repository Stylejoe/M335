
function latitudeAndLongitudeChanged(latitude, longitude)
{
    return true;
}

function setData()
{
    var latitude = document.getElementById("x").value;
    var longitude = document.getElementById("y").value;
    console.log("ELEMENTE GEHOLT");

        if(latitude != "" && longitude != "")
        {       
            console.log("ERSTES IF");     
            if(latitudeAndLongitudeChanged(latitude, longitude))
            {
                console.log("IM IF DRINN");
                writeHistoryData(latitude, longitude);
            }

        }
}

$( "#x" ).change(function() {
  alert( "Handler for .change() called." );
});

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}


function writeHistoryData(latitude, longitude)
{
    var timestamp = Date.now;
    var locationHistory = {
        uid: "uid",
        latitude: latitude,
        longitude: longitude,
        timestamp: timestamp
    };

    var newHistoryKey = firebase.database().ref().child('historys').push().key;

    var updates = {};
    updates['/historys/' + newHistoryKey] = locationHistory;

    return firebase.database().ref().update(updates);
}