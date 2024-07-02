// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQLIObqOkWHukcgFkHdkXL2J89DcLRr7Y",
  authDomain: "netflixgpt-ddde0.firebaseapp.com",
  projectId: "netflixgpt-ddde0",
  storageBucket: "netflixgpt-ddde0.appspot.com",
  messagingSenderId: "351640000420",
  appId: "1:351640000420:web:d2a4bb2d7ecd492caf5331",
  measurementId: "G-QWRK46YM0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();