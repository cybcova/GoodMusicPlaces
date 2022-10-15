import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text } from "react-native-elements";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
import Toast from "react-native-toast-message";

import Loading from "../../components/Loading";

export function InfoUser(props) {
  console.log("[InfoUser]");
  console.log("props:");
  console.log(JSON.stringify(props, null, 2));

  //console.log(JSON.stringify(user, null, 2));
  //const { setLoading, setLoadingText } = props;
  const {
    authenticatedUser: {
      currentUser: { uid, photoURL, displayName, email },
    },
  } = props;

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const [avatar, setAvatar] = useState(photoURL);

  const getPermissionAsync = async () => {
    console.log("function: getPermissionAsync");
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log("Permisos:");
    if (status !== "granted") {
      console.log("Denegados");
      Toast.show({
        type: "error",
        position: "top",
        text1: "Permiso Denedados :(",
      });
    } else {
      console.log("Permitidos");
      console.log(status);
    }
  };

  const changeAvatar = async () => {
    //getPermissionAsync;
    console.log("function: changeAvatar");
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
          .catch((e) => console.log("Upload Image Fail por: ", e)); //recordar poner toast
    } else {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Denied Permissions :(",
        text2: "Please allow the access to the photo library in the settings",
      });
    }
  };

  const uploadImage = async (uri) => {
    console.log("uploadImage");
    setLoading(true);
    setLoadingText("uploading photo");

    const response = await fetch(uri);
    console.log("fetch uri");
    const blob = await response.blob();
    console.log("blob");

    // Create a root reference
    const storage = getStorage();
    console.log("getStorage");

    // Create a reference
    const imageRef = ref(storage, "avatars/" + uid + ".jpg");
    console.log("imageRef");
    const storageRef = ref(storage, imageRef);
    console.log("storageRef");

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, blob)
      .then((snapshot) => {
        console.log("then upload bytes");
        setLoading(false);

        console.log("Uploaded a blob or file!");
        console.log(snapshot);
        updatedPhotoUrl(imageRef);
      })
      .catch((e) => {
        console.log("ERROR!!!!");

        console.log(e);
      });
  };

  const updatedPhotoUrl = async (imageRef) => {
    setLoading(true);
    setLoadingText("updating photo");
    console.log("function: updatedPhotoUrl");
    console.log("imageRef:");
    console.log(imageRef);
    await getDownloadURL(imageRef)
      .then(async (url) => {
        console.log("getDownloadURL:");
        console.log(url);
        const auth = getAuth();
        await updateProfile(auth.currentUser, {
          photoURL: url,
        })
          .then(() => {
            setLoading(false);
            console.log("updateProfile:");
            console.log("Profile updated!");
            console.log(auth);
            // Profile updated!
            // ...
          })
          .catch((error) => {
            console.log("error!");
            console.log(error);
            // An error occurred
            // ...
          });
        setAvatar(url);
        // `url` is the download URL for 'images/stars.jpg'

        /* This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();

        // Or inserted into an <img> element
        const img = document.getElementById("myimg");
        img.setAttribute("src", url);*/
      })
      .catch((error) => {
        console.log("error!");
        console.log(error);
        // Handle any errors
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

      <Loading text={loadingText} isVisible={loading} />
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
