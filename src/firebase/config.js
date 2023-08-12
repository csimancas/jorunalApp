// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp_J8socEaXTU-V4cj7hT062OmlzCdM4M",
  authDomain: "reactjournal-d6933.firebaseapp.com",
  projectId: "reactjournal-d6933",
  storageBucket: "reactjournal-d6933.appspot.com",
  messagingSenderId: "231110859977",
  appId: "1:231110859977:web:9d5684bf865073b37ac118",
  measurementId: "G-1KDWXD418M",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
