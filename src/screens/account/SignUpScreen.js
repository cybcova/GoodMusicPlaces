import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SignUpForm from "../../auth/sign-up/SignUpForm";

export function SignUpScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../assets/brand/good-music-places-logo.png")}
        style={styles.logo}
      />

      <Text style={styles.titleGM}>Good Music</Text>
      <Text style={styles.titleP}>Places</Text>
      <View style={styles.content}>{<SignUpForm />}</View>
    </KeyboardAwareScrollView>
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
});
