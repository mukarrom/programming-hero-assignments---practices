// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoLT6mxT5OoQJFh-JP4Htecgao1D9lj4Y",
  authDomain: "mmh-assignment-10.firebaseapp.com",
  projectId: "mmh-assignment-10",
  storageBucket: "mmh-assignment-10.appspot.com",
  messagingSenderId: "955725737731",
  appId: "1:955725737731:web:05f31c296c8cd61a590336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;