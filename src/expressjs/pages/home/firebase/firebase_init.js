// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6tb36z8HSvQRzBz3bJBnyFVHu2Hb4aSM",
  authDomain: "jakeoliverlee-resume.firebaseapp.com",
  projectId: "jakeoliverlee-resume",
  storageBucket: "jakeoliverlee-resume.appspot.com",
  messagingSenderId: "906273038720",
  appId: "1:906273038720:web:1ed24be5a1a3abdfb86165",
  measurementId: "G-D9Y8S6184P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);