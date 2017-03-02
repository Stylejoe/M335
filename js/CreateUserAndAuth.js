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


var actualBenutzer = firebase.auth().currentUser;

//Google loginButton
var loginWithGoogle = document.getElementById('googleAuthentification');
var emailAuth = document.getElementById("emailAuth");
var registerEmail = document.getElementById("registerEmail");
var registerWithEmailLink = document.getElementById("registerWithEmailLink");
var currentUID;

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}


function userNonFirstTime() {
  // Get authentication data
  var authData = firebase.auth();
  console.log(authData);

  // Get your user information
  var userid = authData.currentUser.uid;
  console.log("Der User heisst: " + userid);


  // Call your function to check if they are a first time user.

  if (userid == null) {
    return false;
  }
  else {
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

  firebase.database().ref().child('users').child(userId).once('value', function (snapshot) {
    var exists = (snapshot.val() !== null);
    return userFirstTimeCallback(userId, exists);
  });
}

function onAuthStateChanged(user) {

  console.log("onautstatechanged " + user);

  if (user && currentUID === user.uid) {
    return;
  }
  actualBenutzer = user;


  if (user) {
    currentUID = user.uid;

    noneDisplayElementWithId("register");
    displayElementWithId("home");
    displayElementWithId("nav");

    //splashPage.style.display = 'none';

    if (!userNonFirstTime()) {
      writeUserData(user.uid, user.displayName, user.email, user.photoURL);
      console.log("FirstTImeUser");
    }
    else {
      console.log("KeinFirstTimeUser");
    }




  } else {
    // Set currentUID to null.
    currentUID = null;
    // Display the splash page where you can sign-in.
    HideAllElements();
    displayElementWithId("register");
    //splashPage.style.display = '';
  }
}




window.addEventListener('load', function () {

  HideAllElements();
  displayElementWithId("register");

  loginWithGoogle.addEventListener('click', function () {

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });

  emailAuth.addEventListener('click', function () {
    HideAllElements();
    displayElementWithId("login");

    


  });

  registerWithEmailLink.addEventListener('click', function () {
    HideAllElements();
    displayElementWithId("registerEmail");
  })
});

firebase.auth().onAuthStateChanged(onAuthStateChanged);
