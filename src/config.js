// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,googleAuthprovider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPtyfoRbc3-22wAcgZwqANuYW3EfuKHuY",
  authDomain: "booking-9094e.firebaseapp.com",
  projectId: "booking-9094e",
  storageBucket: "booking-9094e.appspot.com",
  messagingSenderId: "89548694701",
  appId: "1:89548694701:web:65950fd90deadc82b99224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new googleAuthprovider();

