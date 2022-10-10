import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text } from "react-native-elements";
import { getAuth, updateProfile } from "firebase/auth";

export function InfoUser(currentUser) {
  console.log("[InfoUser]");
  console.log("currentUser:");
  console.log(JSON.stringify(currentUser, null, 2));

  //console.log(JSON.stringify(user, null, 2));
  //const { setLoading, setLoadingText } = props;
  const { uid, photoURL, displayName, email } = currentUser.currentUser;
  const [avatar, setAvatar] = useState(photoURL);

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.avatar}
        icon={{ type: "material", name: "person" }}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory
          size={24}
          onPress={() => console.log("changeAvatar")}
        />
      </Avatar>

      <View>
        <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 30,
  },
  avatar: {
    marginRight: 20,
    backgroundColor: "green",
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
