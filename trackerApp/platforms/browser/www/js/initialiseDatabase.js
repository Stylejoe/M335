  // Initialize Firebase
  
  function initialiseDatabase()
  {
  src="https://www.gstatic.com/firebasejs/3.6.10/firebase.js"
  
  var config = {
    apiKey: "AIzaSyAc-PLpf1HbaTkSGE-xZDz5kMVudMNAd6A",
    authDomain: "trackerdb-77a7d.firebaseapp.com",
    databaseURL: "https://trackerdb-77a7d.firebaseio.com",
    storageBucket: "trackerdb-77a7d.appspot.com",
    messagingSenderId: "281338715777"
  };
  firebase.initializeApp(config);
  console.log("Datenbankkonfiguration ist durchgelaufen.");  
  }
