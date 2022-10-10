import react, { useState, useRef } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Loading from "../../components/Loading";
import { InfoUser } from "./UserInfoScreen";

export default function UserScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const toastRef = useRef();

  const auth = getAuth();

  console.log("[UserScreen]");
  console.log("Auth:");
  console.log(JSON.stringify(auth, null, 2));
  console.log("Auth.CurrentUser:::::::::::::::::");
  console.log(JSON.stringify(auth.currentUser, null, 2));

  return (
    <View>
      <InfoUser currentUser={auth.currentUser} />
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
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
