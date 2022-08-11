import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './app/navigations/Navigation';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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

export default function App() {
  useEffect(() => {
    
    let app;

    if (firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig)
    } else {
      app = firebase.app();
    }

    const db = app.firestore();
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => { 
      console.log(user);
    });
    
  }, [])
  
  return (
    <Navigation/>
  );
};
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
