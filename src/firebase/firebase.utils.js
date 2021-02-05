import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// My config object
const config = {
  apiKey: "AIzaSyAZnc6bLi9V08pEhiwGQhsI5douQHt6Q_A",
  authDomain: "crwn-db-188ec.firebaseapp.com",
  projectId: "crwn-db-188ec",
  storageBucket: "crwn-db-188ec.appspot.com",
  messagingSenderId: "947464036142",
  appId: "1:947464036142:web:64a06a532803b4dab4e4bf",
  measurementId: "G-WW98PTSWYE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
