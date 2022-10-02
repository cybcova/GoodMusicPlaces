import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import LogInForm from "../../auth/log-in/LogInForm";

export default function LoginScreen() {
  const localNavigator = useNavigation();
  return (
    <ScrollView>
      <Image
        source={require("../../assets/brand/good-music-places-logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />

      <Text style={styles.titleGM}>Good Music</Text>
      <Text style={styles.titleP}>Places</Text>

      <View style={styles.content}>
        <Text style={styles.textRegister}>
          New to here?{" "}
          <Text
            style={styles.btnRegister}
            onPress={() => {
              console.log("entra sign-up-screen");
              localNavigator.navigate("sign-up-screen");
            }}
          >
            Create an account
          </Text>
          .
        </Text>
      </View>
      <View style={styles.content}>{<LogInForm />}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: 150,
    marginTop: 20,
  },

  titleGM: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
  },

  titleP: {
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
  },
  content: {
    marginHorizontal: 40,
  },
  textRegister: {
    marginTop: 15,
    textAlign: "center",
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },
});
