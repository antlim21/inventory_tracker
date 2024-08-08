// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChvP2i1i2VxESn6xaq3n1wIDcRiTtFvI4",
  authDomain: "inventory-management-ef493.firebaseapp.com",
  projectId: "inventory-management-ef493",
  storageBucket: "inventory-management-ef493.appspot.com",
  messagingSenderId: "890960830186",
  appId: "1:890960830186:web:af2ca7c4967d2b6d8d0193",
  measurementId: "G-QW0M332Q2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}