// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA21ncY3-UfCbYlh3Ru5zst5ldgg8z8cFY",
  authDomain: "ema-john-simple-2f8bf.firebaseapp.com",
  projectId: "ema-john-simple-2f8bf",
  storageBucket: "ema-john-simple-2f8bf.appspot.com",
  messagingSenderId: "661797027553",
  appId: "1:661797027553:web:d5c4941163de66a349c1a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;