import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCUfX87aovM3kzYdUfUnqvU8w2h59duiYk",
  authDomain: "e-commerce-db-5b8c4.firebaseapp.com",
  projectId: "e-commerce-db-5b8c4",
  storageBucket: "e-commerce-db-5b8c4.appspot.com",
  messagingSenderId: "733116885612",
  appId: "1:733116885612:web:edffa5cc6d8dab86018649",
  measurementId: "G-TYJHFQNH8L",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
