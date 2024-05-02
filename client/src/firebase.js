// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "project-exhibithion-2.firebaseapp.com",
  projectId: "project-exhibithion-2",
  storageBucket: "project-exhibithion-2.appspot.com",
  messagingSenderId: "282393308344",
  appId: "1:282393308344:web:00e0a819ad73d83b69584d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);