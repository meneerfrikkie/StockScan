// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2KzTeo_3cIW3GkWo4rsq6LDLjw4ewR4g",
  authDomain: "stockascan.firebaseapp.com",
  projectId: "stockascan",
  storageBucket: "stockascan.appspot.com",
  messagingSenderId: "1060125482730",
  appId: "1:1060125482730:web:da1f6f3321020509c64193",
  measurementId: "G-YBJ7313TZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence); // Set session persistence
const db = getFirestore(app);

export { db, auth };