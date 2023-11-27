// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "infinity--estate.firebaseapp.com",
  projectId: "infinity--estate",
  storageBucket: "infinity--estate.appspot.com",
  messagingSenderId: "598991316555",
  appId: "1:598991316555:web:08baeddfa1615cf8044fce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);