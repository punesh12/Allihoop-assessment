import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBRjKxxfwEb5x1lx_2267t9S40HRus-WDc",
    authDomain: "display-post.firebaseapp.com",
    projectId: "display-post",
    storageBucket: "display-post.appspot.com",
    messagingSenderId: "536316769043",
    appId: "1:536316769043:web:c346fd536d50a3353ce0e6"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export {db}