
//Alle elemente vom Dokument geholt
var loginWithGoogle = document.getElementById('googleAuthentification');
var emailAuth = document.getElementById("emailAuth");
var registerEmail = document.getElementById("registerEmail");
var registerWithEmailLink = document.getElementById("registerWithEmailLink");
var registerButton = document.getElementById("registerButton");
var returnToSignIn = document.getElementById("returnToSignIn");
var loginButton = document.getElementById("loginButton");
var returnToSignInLogin = document.getElementById("returnToSignInLogin");
var ausloggen = document.getElementById("ausloggen");
var currentUID;

//Schreibt die UserDaten in die DB hinein
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}
/*
AB HIER WIRD KONTROLLIERT OB DER USER SCHON MAL ANGEMELDET WAR HIER 
VERGLEICH MIT DATENBANK!
___________________________________________________________________
*/

//Ist der User schon mal hier gewesen?
function userNonFirstTime() {
  // Get authentication data
  var authData = firebase.auth();
  console.log(authData);

  // Get your user information
  var userid = authData.currentUser.uid;
  console.log("Der User heisst: " + userid);

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

/*
BIS HIER WIRD KONTROLLIERT OB DER USER SCHON MAL ANGEMELDET WAR HIER 
VERGLEICH MIT DATENBANK!
___________________________________________________________________
*/



//Ab hier kommt das Load, also wenn die Elemente geladen sind inkl. die Click-Events werden geladen. 
//_________________________________________________________________________________________________
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
  });

  registerButton.addEventListener('click', function () {

    var email = document.getElementById("email").value;
    var name = document.getElementById("displayName").value;
    var pw = document.getElementById("pw").value;
    var pwbest = document.getElementById("pwbest").value;

    //check if already exists in Firebase
    console.log("VORIFHINEINGEKOMMEN!!!!!!!!");
    console.log(email + "\n" + name + "\n" + pw + "\n" + pwbest + "\n");
    if (pw == pwbest && pw != null && email != null) {

      firebase.auth().createUserWithEmailAndPassword(email, pw).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

      console.log("Created Account");

      signInWithEmailAndPw(email, pw);

      console.log("SignedIn");
    }
  });

  returnToSignInLogin.addEventListener('click', function () {
    HideAllElements();
    displayElementWithId("register");
  });

  returnToSignIn.addEventListener('click', function () {
    HideAllElements();
    displayElementWithId("register");

  });

  loginButton.addEventListener('click', function () {

    console.log("HALLO");

    var emailLogin = document.getElementById('emailLogin').value;
    var pwLogin = document.getElementById('pwLogin').value;

  console.log(emailLogin, pwLogin);

    if (emailLogin != null && pwLogin != null) {
      signInWithEmailAndPw(String(emailLogin), String(pwLogin));
    }
    showStartScreen();
  });

  ausloggen.addEventListener('click', function(){

      firebase.auth().signOut().then(function() {
        alert("Sie sind nun ausgeloggt!");
        HideAllElements();
        displayElementWithId("register");

    }, function(error) {
        // An error happened.
});
  })
});
//Bis hier
//____________________________________________________________________________________

//Wenn die Authentifikation wechselt also der User ausloggt oder einloggt etc.
function onAuthStateChanged(user) {

  console.log("onautstatechanged " + user);

  if (user && currentUID === user.uid) {
    return;
  }

  //Wenn eingeloggt
  if (user) {
    currentUID = user.uid;

    showStartScreen();

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

//Wenn sich etwas ändert an der Auth
firebase.auth().onAuthStateChanged(onAuthStateChanged);


function signInWithEmailAndPw(email, password) {
  console.log(email, password);
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}