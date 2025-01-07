// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

import { setDoc, getFirestore,updateDoc, addDoc,  collection, doc, getDoc, getDocs} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMrS2jnUgECJaFd8jVhRN_vplGG4Wepjc",
  authDomain: "login-different-pages.firebaseapp.com",
  projectId: "login-different-pages",
  storageBucket: "login-different-pages.firebasestorage.app",
  messagingSenderId: "1090192244394",
  appId: "1:1090192244394:web:a468b9ae24411084f09ad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export{
  app,
  getAuth,
  createUserWithEmailAndPassword,
  auth,
  doc, setDoc,
  db,
  signInWithEmailAndPassword,
  getDoc,
  onAuthStateChanged,
  collection, addDoc,
  getDocs,
  updateDoc
}