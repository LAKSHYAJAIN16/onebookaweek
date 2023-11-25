// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrax-lARRmmhQdT60bj3uWAETOxyj6HEg",
  authDomain: "onebookaweek-868a0.firebaseapp.com",
  projectId: "onebookaweek-868a0",
  storageBucket: "onebookaweek-868a0.appspot.com",
  messagingSenderId: "629718416907",
  appId: "1:629718416907:web:078b0704309df64da9d10e",
  measurementId: "G-9HVPG11RK3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);