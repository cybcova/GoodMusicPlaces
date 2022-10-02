import React, { useEffect } from "react";
import Navigation from "./src/routes/Navigation";

import { firebaseApp } from "./src/config/Firebase"; //TODO remove

export default function App() {
  /* useEffect(() => {
    
    const db = firebaseApp.firestore();

    
  }, [])*/

  return <Navigation />;
}
