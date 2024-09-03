// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgslPQOhGOYu9eSLYav1VaHHxH2dTyMkI",
  authDomain: "finance-bro-2024.firebaseapp.com",
  projectId: "finance-bro-2024",
  storageBucket: "finance-bro-2024.appspot.com",
  messagingSenderId: "384101466111",
  appId: "1:384101466111:web:c50336285957c7734671ca",
  measurementId: "G-FJ7L9G7F9Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence); // Set session persistence
const db = getFirestore(app);

export { db, auth };