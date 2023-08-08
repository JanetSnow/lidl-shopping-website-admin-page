// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "shop-f7ca8.firebaseapp.com",
  projectId: "shop-f7ca8",
  storageBucket: "shop-f7ca8.appspot.com",
  messagingSenderId: "538253385062",
  appId: "1:538253385062:web:fc83ea61bdb08f5c923ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;