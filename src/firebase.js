import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAooOqNEpXIHAZATiryxjTNyh2FNRCSaIY",
  authDomain: "clone-jasdev.firebaseapp.com",
  databaseURL: "https://clone-jasdev.firebaseio.com",
  projectId: "clone-jasdev",
  storageBucket: "clone-jasdev.appspot.com",
  messagingSenderId: "1018954342635",
  appId: "1:1018954342635:web:5d16dab4fb8239846ddeae",
  measurementId: "G-WYRC5QYTG0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
