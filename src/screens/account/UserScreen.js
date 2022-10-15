import react, { useState, useRef } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import Loading from "../../components/Loading";
import { InfoUser } from "./UserInfoScreen";

export default function UserScreen() {
  console.log("[UserScreen]");

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const auth = getAuth();

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
  signOut(auth)
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log("Error", error);
    });
}
