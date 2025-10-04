// src/Auth/Firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   // 👈 yeh import add karo

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0YzOYq4cxTCt999uTJ0yeww5F3EYuJMI",
  authDomain: "movix-cd636.firebaseapp.com",
  projectId: "movix-cd636",
  storageBucket: "movix-cd636.firebasestorage.app",
  messagingSenderId: "1073605963255",
  appId: "1:1073605963255:web:340e91981c3dcd087e92f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 👇 yeh add karo
export const auth = getAuth(app);
