import "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKlrbuzVTzMCEb_SmwVyiX_0aavXJy9h0",
  authDomain: "mi-aerolinea-2f79e.firebaseapp.com",
  projectId: "mi-aerolinea-2f79e",
  storageBucket: "mi-aerolinea-2f79e.appspot.com",
  messagingSenderId: "894024668674",
  appId: "1:894024668674:web:751d3a879d631dad94391b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
