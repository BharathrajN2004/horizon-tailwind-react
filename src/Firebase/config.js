// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7qpwGN5ceOdfXZK1L_LfZQI1pAr9R56A",
  authDomain: "incubateqr.firebaseapp.com",
  projectId: "incubateqr",
  storageBucket: "incubateqr.appspot.com",
  messagingSenderId: "918802207832",
  appId: "1:918802207832:web:c8fd6c548ebf0e4bc5e62d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, firestore, auth };
