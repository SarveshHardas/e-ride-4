import firebase from "firebase";
require("@firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLOcldVMSFENoKQxu0lfo6bET2rACKwJQ",
  authDomain: "e-ride-6ecd0.firebaseapp.com",
  projectId: "e-ride-6ecd0",
  storageBucket: "e-ride-6ecd0.appspot.com",
  messagingSenderId: "68952234673",
  appId: "1:68952234673:web:71cb5d52e704484d3e2090"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
