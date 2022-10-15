import react, { useState, useRef } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import Loading from "../../components/Loading";
import { InfoUser } from "./UserInfoScreen";

export default function UserScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const auth = getAuth();

  console.log("[UserScreen]");
  console.log("Auth:");
  console.log(JSON.stringify(auth, null, 2));
  console.log("Auth.CurrentUser:");
  console.log(JSON.stringify(auth.currentUser, null, 2));

  return (
    <View>
      <InfoUser authenticatedUser={auth} />
      <Button title="Sign Out" onPress={() => thisSignOut(auth)} />
      {/* <Toast ref={toastRef} position="center" opacity={0.9} /> */}
      <Loading text={loadingText} isVisible={loading} />
    </View>
  );
}

function thisSignOut(auth) {
  console.log("Se apreto el boton de cierre de sesion");

  console.log("auth:");
  console.log(JSON.stringify(auth, null, 2));
  console.log("getAuth:");
  console.log(JSON.stringify(getAuth(), null, 2));

  signOut(auth)
    .then(() => {
      console.log("logged out");
      console.log("auth");
      console.log(auth);
    })
    .catch((error) => {
      console.log("Error", error);
    });
}
