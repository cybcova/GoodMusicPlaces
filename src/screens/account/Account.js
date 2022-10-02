import React, { useEffect, useState } from "react";
import { firebaseAuth } from "../../config/Firebase";

import Loading from "../../components/Loading";

import LoginScreen from "./LoginScreen";
import UserScreen from "./UserScreen";

export default function Account() {
  const [hasLogged, setHasLogged] = useState(null);
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      console.log(user);
      setHasLogged(user ? true : false);
    });
  }, []);

  if (hasLogged == null)
    return <Loading isVisible={true} text="cargando usuario..." />;

  return hasLogged ? <UserScreen /> : <LoginScreen />;
}
