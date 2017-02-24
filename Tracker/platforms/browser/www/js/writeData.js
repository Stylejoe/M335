
function latitudeAndLongitudeChanged(latitude, longitude)
{
    return true;
}

function setData()
{
    var latitude = document.getElementById("x").value;
    var longitude = document.getElementById("y").value;
    console.log("ELEMENTE GEHOLT");

        if(latitude != null && longitude != null)
        {       
            console.log("ERSTES IF");     
            if(latitudeAndLongitudeChanged(latitude, longitude))
            {
                console.log("IM IF DRINN");
                writeHistoryData(latitude, longitude);
            }

        }
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
    console.log("IM IF DRINN");

    var locationHistory = {
        uid: "uid",
        latitude: latitude,
        longitude: longitude
    };

    console.log("IM IF DRINN");

    var newHistoryKey = firebase.database().ref().child('historys').push().key;

    var updates = {};
    updates['/historys/' + newHistoryKey] = locationHistory;

    return firebase.database().ref().update(updates);
}