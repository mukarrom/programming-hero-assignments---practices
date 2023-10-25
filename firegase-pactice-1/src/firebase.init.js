// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDujpHKDFFbCkt3lQBVrA4SSNY9PhR1HUo",
  authDomain: "fir-practice-1-86e7f.firebaseapp.com",
  projectId: "fir-practice-1-86e7f",
  storageBucket: "fir-practice-1-86e7f.appspot.com",
  messagingSenderId: "711780182430",
  appId: "1:711780182430:web:632f26d812270f05004e8f",
  measurementId: "G-1H832LKKY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;