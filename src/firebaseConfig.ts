import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATUZzWoBVVoeqzd8Mfk89hZXB22-NrNrY",
  authDomain: "isthisascam-d114f.firebaseapp.com",
  projectId: "isthisascam-d114f",
  storageBucket: "isthisascam-d114f.firebasestorage.app",
  messagingSenderId: "1081517026364",
  appId: "1:1081517026364:web:0fd485900b8c488de32739",
  measurementId: "G-QP7PQZ4H6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };