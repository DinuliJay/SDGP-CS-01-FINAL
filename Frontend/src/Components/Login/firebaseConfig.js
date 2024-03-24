//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyCsLv6gcG5xVrYNlDCHkD0Fqk7KHOYGGS4",
  authDomain: "react-firebase-auth-ce559.firebaseapp.com",
  projectId: "react-firebase-auth-ce559",
  storageBucket: "react-firebase-auth-ce559.appspot.com",
  messagingSenderId: "837421354556",
  appId: "1:837421354556:web:fb6ef0ae1c708c26333d39"
};

const app = firebase.initializeApp(firebaseConfig);
export default app