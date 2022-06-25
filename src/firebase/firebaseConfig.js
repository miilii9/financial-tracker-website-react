import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOlPwdO_acBupp1nd0dwPAkMUdgQ3mnhg",
  authDomain: "finance-tracker-9c51e.firebaseapp.com",
  projectId: "finance-tracker-9c51e",
  storageBucket: "finance-tracker-9c51e.appspot.com",
  messagingSenderId: "379133419343",
  appId: "1:379133419343:web:ad7b1cf6e645aecebf6f3a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timeStamp = firebase.firestore.Timestamp();
export { projectFirestore, projectAuth, timeStamp };
