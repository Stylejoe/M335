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

function userNonFirstTime(){
    // Get authentication data
var authData = firebase.auth();
console.log(authData);

// Get your user information
var userid = authData.currentUser.uid;
console.log("Der User heisst: "+userid);


// Call your function to check if they are a first time user (aka exists).

if(userid == null)
{
    return true;
}
else
{
    return checkForFirstTime(userid);
}

}

function userFirstTimeCallback(userId, exists) {
  if (exists) {
      return true;
    //alert('user ' + userId + ' exists!');
    // Do something here you want to do for non-firstime users...
  } else {
      return false;
    //alert('user ' + userId + ' does not exist!');
    // Do something here you want to do for first time users (Store data in database?)
  }
}

// Tests to see if /users/<userId> exists. 
function checkForFirstTime(userId) { 

    firebase.database().ref().child('users').child(userId).once('value', function(snapshot) {
    var exists = (snapshot.val() !== null);
   return userFirstTimeCallback(userId, exists);
  });
}




function writeHistoryData(latitude, longitude)
{
   
    var time = firebase.database.ServerValue.TIMESTAMP;

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;     // The user's ID, unique to the Firebase project. Do NOT use
           
        
        if(userNonFirstTime())
        {
            writeUserData(uid, name, email, photoUrl); 
            console.log("FirstTImeUser");
        }
        else{
                    console.log("KeinFirstTimeUser");
        }


               



    var locationHistory = {
        uid: uid,
        latitude: latitude,
        longitude: longitude,
        time: time
    };
    var newHistoryKey = firebase.database().ref().child('historys').push().key;

    var updates = {};
    updates['/historys/' + newHistoryKey] = locationHistory;

    return firebase.database().ref().update(updates);
    }
}