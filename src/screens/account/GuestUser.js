import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function GuestUser() {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../assets/account/blank-profile.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.description}>Very Welcome!</Text>
      <View style={styles.viewButtonStyle}>
        <Button
          title="Log In"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.containerStyle}
          onPress={() => {
            navigation.navigate("login-screen");
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewButtonStyle: {
    flex: 1,
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#000",
  },
  containerStyle: {
    width: "70%",
  },
});
