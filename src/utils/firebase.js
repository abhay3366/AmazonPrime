// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4aFbwrcHmceVC6j-tjBAB64Zf9ziYCAI",
  authDomain: "prime-4dfdd.firebaseapp.com",
  projectId: "prime-4dfdd",
  storageBucket: "prime-4dfdd.appspot.com",
  messagingSenderId: "1034106494533",
  appId: "1:1034106494533:web:3a5c2841950c4173c9cd2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();