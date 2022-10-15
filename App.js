import React, { useEffect } from "react";
import Navigation from "./src/routes/Navigation";
import Toast from "react-native-toast-message";
import { LogBox } from "react-native";

import { firebaseApp } from "./src/config/Firebase"; //TODO remove

export default function App() {
  /* useEffect(() => {
    
    const db = firebaseApp.firestore();

    
  }, [])*/
  LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  ]);

  return (
    <>
      <Navigation />
      <Toast />
    </>
  );
}
