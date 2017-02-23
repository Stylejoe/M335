<<<<<<< HEAD

function latitudeAndLongitudeChanged(latitude, longitude)
{
    return true;
}

function setData()
{
    var latitude = document.getElementById("x").value;
    var longitude = document.getElementById("y").value;

        if(latitude != null && longitude != null)
        {            
            if(latitudeAndLongitudeChanged(latitude, longitude))
            {
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
    var timestamp = new Date(year, month, day, hours, minutes, seconds, miliseconds);
    var locationHistory = {
        uid: "uid",
=======
function writeNewData(uid, latitude, longitude)
{
    var locationHistory = {
        uid: uid,
>>>>>>> 1bdd47e559e7a18b60e019331e4760716648ff60
        latitude: latitude,
        longitude: longitude,
        timestamp: timestamp
    };
<<<<<<< HEAD

    var newHistoryKey = firebase.database().ref().child('historys').push().key();

    var updates = {};
    updates['/historys/' + newHistoryKey] = locationHistory;

    return firebase.database().ref().update(updates);
=======
>>>>>>> 1bdd47e559e7a18b60e019331e4760716648ff60
}