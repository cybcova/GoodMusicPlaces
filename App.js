import React, {useEffect} from 'react';
import Navigation from './app/navigations/Navigation';

import { firebaseApp } from './Firebase'; //TODO remove
import { firebaseAuth } from './Firebase'; //TODO remove

export default function App() {
  useEffect(() => {
    
    const db = firebaseApp.firestore();

    firebaseAuth.onAuthStateChanged(user => { 
      console.log(user);
    });
    
  }, [])
  
  return (
    <Navigation/>
  );
};
