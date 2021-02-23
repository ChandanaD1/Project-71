import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDwOm4v9fxNFthQjI9xIEWiCPb168Sh0aw",
    authDomain: "project-70-b9765.firebaseapp.com",
    databaseURL: "https://project-70-b9765-default-rtdb.firebaseio.com",
    projectId: "project-70-b9765",
    storageBucket: "project-70-b9765.appspot.com",
    messagingSenderId: "621141470117",
    appId: "1:621141470117:web:ca7da5f32006814128164c"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()