import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text } from "react-native-elements";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export function InfoUser(currentUser) {
  console.log("[InfoUser]");
  console.log("currentUser:");
  console.log(JSON.stringify(currentUser, null, 2));

  //console.log(JSON.stringify(user, null, 2));
  //const { setLoading, setLoadingText } = props;
  const { uid, photoURL, displayName, email } = currentUser.currentUser;
  const [avatar, setAvatar] = useState(photoURL);

  const getPermissionAsync = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    console.log("Permisos:");
    if (status !== "granted") {
      console.log("Denegados");
      alert("...");
    } else {
      console.log("Permitidos");
      console.log(status);
    }
  };

  const changeAvatar = async () => {
    //getPermissionAsync;
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(granted);
    if (granted) {
      const imageResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
      });
      if (!imageResult.cancelled)
        uploadImage(imageResult.uri)
          .then(() => console.log("Upload Image Finish"))
          .catch(() => console.log("Upload Image Fail"));
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    console.log(JSON.stringify(response, null, 2));
    const blob = await response.blob();
    console.log(JSON.stringify(blob, null, 2));

    // Create a root reference
    const storage = getStorage();
    console.log(JSON.stringify(storage, null, 2));

    // Create a reference
    const imageRef = ref(storage, "avatars/" + "uid" + ".jpg");
    const storageRef = ref(storage, imageRef);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, blob)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
      })
      .catch((e) => {
        console.log("ERROR!!!!");

        console.log(e);
      });
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.avatar}
        icon={{ type: "material", name: "person" }}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
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
