// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCk2_aBqfvrtpw3XJOUoyGuRzqHGWr3pe4",
  authDomain: "ecommerce-app-a1d8d.firebaseapp.com",
  databaseURL:
    "https://ecommerce-app-a1d8d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommerce-app-a1d8d",
  storageBucket: "ecommerce-app-a1d8d.appspot.com",
  messagingSenderId: "965085983256",
  appId: "1:965085983256:web:9fe44014dfcd51ed96096d",
  measurementId: "G-X8EWW852GP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
