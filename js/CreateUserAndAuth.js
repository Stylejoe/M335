/*function signInWithEmailAndPassword()
{

var email = document.getElementById("#email").value;
var password = document.getElementById("#password").value;

if(email != null || email != "" && password != null || password != "")
{
   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

}
authentificateUser()
}

function signOut()
{
    //Sign out user
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});*/

//Google loginButton
var loginWithGoogle = document.getElementById('googleAuthentification');
var currentUID;

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


// Call your function to check if they are a first time user.

if(userid == null)
{
    return false;
}
else
{
    return checkForFirstTime(userid);
}

}

function userFirstTimeCallback(userId, exists) {
  if (exists) {
      return true;
    // non-firstime users...
  } else {
      return false;
    //first time users (store in database)
  }
}

// Tests to see if users exists. 
function checkForFirstTime(userId) { 

    firebase.database().ref().child('users').child(userId).once('value', function(snapshot) {
    var exists = (snapshot.val() !== null);
   return userFirstTimeCallback(userId, exists);
  });
}


function onAuthStateChanged(user) {

  if (user && currentUID === user.uid) {
    return;
  }

  

  if (user) {
    currentUID = user.uid;
    noneDisplayElementWithId("register");
    displayElementWithId("home");
    displayElementWithId("nav");

    //splashPage.style.display = 'none';

        if(!userNonFirstTime())
        {
            writeUserData(user.uid, user.displayName, user.email, user.photoURL);
            console.log("FirstTImeUser");
        }
        else{
                    console.log("KeinFirstTimeUser");
        }

    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 }, {enableHighAccuracy: true});
    
    //startDatabaseQueries();
  } else {
    // Set currentUID to null.
    currentUID = null;
    // Display the splash page where you can sign-in.
    HideAllElements();
    displayElementWithId("register");
    //splashPage.style.display = '';
  }
}




window.addEventListener('load', function() {

  HideAllElements();
  displayElementWithId("register");

loginWithGoogle.addEventListener('click', function(){
  
 var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });
  });

  firebase.auth().onAuthStateChanged(onAuthStateChanged);

  


//firebase.auth().signInWithPopup(provider);
 /*provider.addScope('https://www.googleapis.com/auth/plus.login');

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});*/



/*var credential = firebase.auth.GoogleAuthProvider.credential(
              googleUser.getAuthResponse().id_token);

firebase.auth().signInWithCredential(credential).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  if (errorCode === 'auth/account-exists-with-different-credential') {
    alert('Email already associated with another account.');
    // Handle account linking here, if using.
  } else {
    console.error(error);
  }
 });*/

/*firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});*/

  //firebase.auth().onAuthStateChanged(onAuthStateChanged);





//authentificateUser()



/*firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    $("#register").hide();
    $("#home").show();
    $("#map").hide();
    $("#headerid").show();
    $("#nav").show();

    // User is signed in.
  } else {
    $("#headerid").hide();
    $("#register").show();
    $("#home").hide();
    $("#map").hide();
     $("#nav").hide();

    // No user is signed in.
  }
});

function authentificateUser(){
    
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    $("#register").hide();
    $("#home").show();
    $("#map").hide();
    $("#headerid").show();
    $("#nav").show();

    // User is signed in.
  } else {
    $("#headerid").hide();
    $("#register").show();
    $("#home").hide();
    $("#map").hide();
     $("#nav").hide();

    // No user is signed in.
  }
});
}*/

