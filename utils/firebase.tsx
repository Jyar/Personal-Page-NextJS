// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export function initDB() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  let firebaseConfig = {
    apiKey: String(process.env.APIKEY) || "",
    authDomain: String(process.env.AUTHDOMAIN) || "",
    projectId: String(process.env.PROJECTID) || "",
    storageBucket: String(process.env.STORAGEBUCKET) || "",
    messagingSenderId: String(process.env.MESSAGINGSENDERID) || "",
    appId: String(process.env.APPID) || "",
    databaseURL: String(process.env.DATABASEURL) || "",
    measurementId: String(process.env.MEASUREMENTID) || "",
  };

  let app = null;
  let getDB = null;
  // Initialize Firebase
  if (!firebase.apps.length) {
    app = initializeApp(firebaseConfig);
    getDB = getDatabase(app);
  }
  return getDB;
}
