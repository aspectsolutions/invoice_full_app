import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";
import "firebase/messaging";
import "firebase/analytics";
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyCzhhvz8URJXs5NGQZgMQXrENcEXmkz9qY",
  authDomain: "invoicesaas-dcebe.firebaseapp.com",
  projectId: "invoicesaas-dcebe",
  storageBucket: "invoicesaas-dcebe.appspot.com",
  messagingSenderId: "340673660492",
  appId: "1:340673660492:web:a65003639b2216dcd616e9",
  measurementId: "G-53NLQE6L5W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let storage = firebase.storage();
let database = firebase.database();
let auth = firebase.auth();
let firestore = firebase.firestore();
// Authentication for Google
var googleProvider = new firebase.auth.GoogleAuthProvider();
// Authentication for Facebook
var facebookProvider = new firebase.auth.FacebookAuthProvider();
// Authentication for Twitter
var twitterProvider = new firebase.auth.TwitterAuthProvider();
export {
    firestore, auth, googleProvider, facebookProvider, twitterProvider, database, storage, firebase as default
}