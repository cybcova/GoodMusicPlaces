import React, {useEffect} from 'react';
import Navigation from './src/routes/Navigation';

import { firebaseApp } from './src/config/Firebase'; //TODO remove
import { firebaseAuth } from './src/config/Firebase'; //TODO remove

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
