// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnLTyyVPK2AUfjNs2CpxXAgS1lpvczAHk",
  authDomain: "mmh-todo.firebaseapp.com",
  projectId: "mmh-todo",
  storageBucket: "mmh-todo.appspot.com",
  messagingSenderId: "286562640249",
  appId: "1:286562640249:web:b5e44c127eac0cc1bf0fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;