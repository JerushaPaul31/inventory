// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp, getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from firebase/firestore;Y
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7zGXhUgxVPjJg4fyo57vqq44BA2MpstU",
  authDomain: "inventory-management-34430.firebaseapp.com",
  projectId: "inventory-management-34430",
  storageBucket: "inventory-management-34430.appspot.com",
  messagingSenderId: "19747650252",
  appId: "1:19747650252:web:fdc796656698f24fb3a069",
  measurementId: "G-1BG91B6D8G"
};

// Initialize Firebase
let auth;
let firestore;
let analytics;
if(typeof window !== "undefined"){
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  auth = getAuth(app);
  firestore = getFirestore(app);
  analytics = getAnalytics(app);
}
export {auth, firestore, analytics}