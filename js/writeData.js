var lastLat = null;
var lastLong = null;

function setData()
{

    var latitude = document.getElementById("x").value;
    var longitude = document.getElementById("y").value;
    console.log("ELEMENTE GEHOLT");

        if(latitude != null && longitude != null && latitude != "" && longitude != "")
        {   
  
            if(round(lastLat, 3) != round(latitude, 3))
            {
                writeHistoryData(latitude, longitude);
            }
            else if(round(lastLong, 3) != round(longitude, 3))
            {
                 writeHistoryData(latitude, longitude);
            }
            console.log("IF drinn");
        } 

        lastLat = latitude;
        lastLong = longitude;
    
    
}

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    displayName: name,
    email: email,
    profile_picture : imageUrl
  });
}


function writeHistoryData(latitude, longitude)
{
   var user = firebase.auth().currentUser;
    var time = firebase.database.ServerValue.TIMESTAMP;


    var name, email, photoUrl, uid, emailVerified;


if (user != null)
    {
        email = user.email;
        name = user.displayName;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;     // The user's ID, unique to the Firebase project.   
    

    var history = {
        latitude: latitude,
        longitude: longitude,
        uid: user.uid      
    }

    var newHistoryKey = firebase.database().ref().child('/historys/').push().key;

    var updates = {};
    updates['/history/'+ newHistoryKey] = history;

    /*firebase.database().ref('users/' + user.uid).set({
        latitude: latitude,
        longitude: longitude
  });*/

    return firebase.database().ref().update(updates);
    }
}