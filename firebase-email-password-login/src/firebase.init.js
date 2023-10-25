// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBFVLjQOSzDzIfBwtQTJlG3hW_-uwwZUI",
  authDomain: "email-password-auth-f81d4.firebaseapp.com",
  projectId: "email-password-auth-f81d4",
  storageBucket: "email-password-auth-f81d4.appspot.com",
  messagingSenderId: "640491561938",
  appId: "1:640491561938:web:756623240e6842c4519e0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;