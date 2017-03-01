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

function signInWithGoogle()
{
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login');

firebase.auth().signInWithRedirect(provider);

firebase.auth().getRedirectResult().then(function(result) {
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
});

/*firebase.auth().signInWithPopup(provider).then(function(result) {
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

//authentificateUser()
}

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

