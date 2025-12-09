// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_REAL_KEY",
  authDomain: "yourproject.firebaseapp.com",
  projectId: "yourproject-id",
  storageBucket: "yourproject-id.appspot.com",
  messagingSenderId: "xxxx",
  appId: "1:xxxx:web:xxxx"
};

// Prevent Next.js from initializing Firebase twice
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
