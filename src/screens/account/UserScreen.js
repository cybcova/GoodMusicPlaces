import react from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";

export default function UserScreen() {
  return (
    <View>
      <Text>User...</Text>
      <Button title="Sign Out" onPress={() => thisSignOut()} />
    </View>
  );
}

function thisSignOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
