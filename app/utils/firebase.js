// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNu9M1Wd3RAD_RXHNUIVAL3lYoDUBlrlk",
  authDomain: "goodmusicplaces.firebaseapp.com",
  projectId: "goodmusicplaces",
  storageBucket: "goodmusicplaces.appspot.com",
  messagingSenderId: "1018427198184",
  appId: "1:1018427198184:web:281044c7aac20052a5175d"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);