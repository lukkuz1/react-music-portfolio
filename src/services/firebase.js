// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF2EjPyU0GKeLu99KUx1GiE26B2xHQbiU",
  authDomain: "sventes-su-gediminu.firebaseapp.com",
  projectId: "sventes-su-gediminu",
  storageBucket: "sventes-su-gediminu.firebasestorage.app",
  messagingSenderId: "834096736855",
  appId: "1:834096736855:web:98c8fa72d3ad7562989112",
  measurementId: "G-KFNTFZNPXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);