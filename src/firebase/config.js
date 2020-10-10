import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCCJObZWiGNUvND4BswV3TyBTkTi2SXLzk",
  authDomain: "react-blog-app-901d3.firebaseapp.com",
  databaseURL: "https://react-blog-app-901d3.firebaseio.com",
  projectId: "react-blog-app-901d3",
  storageBucket: "react-blog-app-901d3.appspot.com",
  messagingSenderId: "535552509042",
  appId: "1:535552509042:web:3473db86050df39d046eeb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, auth, timestamp };