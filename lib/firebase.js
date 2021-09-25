import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDZ_c-TG66TPO8gKojeoHkIF_I6N4mLJr4",
    authDomain: "picopay-e07b8.firebaseapp.com",
    projectId: "picopay-e07b8",
    storageBucket: "picopay-e07b8.appspot.com",
    messagingSenderId: "425436652751",
    appId: "1:425436652751:web:a3385940c99ccfa30e43ba",
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
