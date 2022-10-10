import React, { useEffect, useState } from "react";
import { firebaseAuth } from "../../config/Firebase";

import Loading from "../../components/Loading";

import LoginScreen from "./LoginScreen";
import UserScreen from "./UserScreen";

export default function Account() {
  const [hasLogged, setHasLogged] = useState(null);
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setHasLogged(user ? true : false);
      setUserLogged(user ? user : null);
    });

    if (hasLogged) {
      console.log("[Account]");
      console.log("userLogged:");
      console.log(JSON.stringify(userLogged, null, 2));
    }
  }, []);

  if (hasLogged == null)
    return <Loading isVisible={true} text="cargando usuario..." />;

  return userLogged ? <UserScreen /> : <LoginScreen />;
}
