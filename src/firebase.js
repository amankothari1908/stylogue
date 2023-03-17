import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1th_i8uY7XW4tzyZA-yotcfD0aDpbP8k",
  authDomain: "moviesflix-f779e.firebaseapp.com",
  projectId: "moviesflix-f779e",
  storageBucket: "moviesflix-f779e.appspot.com",
  messagingSenderId: "385524578770",
  appId: "1:385524578770:web:4def4de80341886e53700b",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
