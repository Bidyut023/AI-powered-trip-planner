// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdviWtVAd_ki3TiApowEXXEuyD98Mg3Kk",
  authDomain: "triply-68f0b.firebaseapp.com",
  projectId: "triply-68f0b",
  storageBucket: "triply-68f0b.firebasestorage.app",
  messagingSenderId: "397424744119",
  appId: "1:397424744119:web:bb9ec97afa81dae7b5df32",
  measurementId: "G-9296BE9MMJ"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);