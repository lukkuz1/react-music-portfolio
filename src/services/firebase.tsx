// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, browserLocalPersistence, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getDatabase, Database } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF2EjPyU0GKeLu99KUx1GiE26B2xHQbiU",
  authDomain: "sventes-su-gediminu.firebaseapp.com",
  databaseURL: "https://sventes-su-gediminu-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sventes-su-gediminu",
  storageBucket: "sventes-su-gediminu.firebasestorage.app",
  messagingSenderId: "834096736855",
  appId: "1:834096736855:web:98c8fa72d3ad7562989112",
  measurementId: "G-KFNTFZNPXJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with browser persistence
export const auth: Auth = initializeAuth(app, {
  persistence: browserLocalPersistence, // Use browser local persistence for a web app
});

// Initialize Firestore
export const db: Firestore = getFirestore(app);

// Initialize Realtime Database
export const rtdb: Database = getDatabase(app);

export default { auth, db, rtdb };
