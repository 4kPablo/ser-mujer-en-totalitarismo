import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcRkgva3NCJ3rxa89MEzjgrC9RYCnehic",
  authDomain: "historiarte-con-ale.firebaseapp.com",
  projectId: "historiarte-con-ale",
  storageBucket: "historiarte-con-ale.appspot.com",
  messagingSenderId: "136308838166",
  appId: "1:136308838166:web:4104ac6787dca522698a37",
  measurementId: "G-STSRRGQ0FF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
