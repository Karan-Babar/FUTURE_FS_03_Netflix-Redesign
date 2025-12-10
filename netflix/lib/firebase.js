// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtRlLpyjvfb7zpqRiJPbLAz_N5nB57Fow",
  authDomain: "netflix-f6129.firebaseapp.com",
  projectId: "netflix-f6129",
  storageBucket: "netflix-f6129.firebasestorage.app",
  messagingSenderId: "49000903106",
  appId: "1:49000903106:web:c4f685d3c44cd18976e65b",
  measurementId: "G-SER3Q7WY1L"
};

// Prevent Next.js from initializing Firebase twice
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);