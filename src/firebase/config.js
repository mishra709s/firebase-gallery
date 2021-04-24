import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
require("dotenv").config();

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDDv3IoL89T25ZN-3kDSRnpQZbyY4dRdUw",
  authDomain: "firegram-15811.firebaseapp.com",
  projectId: "firegram-15811",
  storageBucket: "firegram-15811.appspot.com",
  messagingSenderId: "63753284757",
  appId: "1:63753284757:web:e897375b2e9af77ccc7f9c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
