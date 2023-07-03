// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: String(process.env.NEXT_PUBLIC_APIKEY) || "",
  authDomain: String(process.env.NEXT_PUBLIC_AUTHDOMAIN) || "",
  projectId: String(process.env.NEXT_PUBLIC_PROJECTID) || "",
  storageBucket: String(process.env.NEXT_PUBLIC_STORAGEBUCKET) || "",
  messagingSenderId: String(process.env.NEXT_PUBLIC_MESSAGINGSENDERID) || "",
  appId: String(process.env.NEXT_PUBLIC_APPID) || "",
  databaseURL: String(process.env.NEXT_PUBLIC_DATABASEURL) || "",
  measurementId: String(process.env.NEXT_PUBLIC_MEASUREMENTID) || "",
};

let getDB = null;
// Initialize Firebase
if (!firebase.apps.length) {
  let app = initializeApp(firebaseConfig);
  getDB = getDatabase(app);
}

export const db = getDB;
