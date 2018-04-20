import firebase from "firebase"

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAnMm8W7imLLZrjL-MB4XmIxsO4v_McJVs",
    authDomain: "chatwebapp-11aa.firebaseapp.com",
    databaseURL: "https://chatwebapp-11aa.firebaseio.com",
    projectId: "chatwebapp-11aa",
    storageBucket: "chatwebapp-11aa.appspot.com",
    messagingSenderId: "26223977611"
  };

  firebase.initializeApp(config);

  const database = firebase.database()

  export {database};
