import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { onChange } from "react-native-reanimated";
import { initialValues, validationSchema } from "./LogInForm.data";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

export default function LogInForm() {
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, formValue.email, formValue.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigation.navigate("account");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Toast.show({
            type: "error",
            position: "top",
            text1: errorCode,
            text2: errorMessage,
          });
        });
    },
  });

  return (
    <View>
      <Input
        placeholder="Email"
        containerStyle={styles.inputForm}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Password"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={hidePassword}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
        rightIcon={visibilityPassword(hidePassword, setHidePassword)}
      />
      <Button
        title="Log In"
        containerStyle={styles.btnContainerJoin}
        buttonStyle={styles.btnJoin}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}

function visibilityPassword(hidePassword, setHidePassword) {
  return (
    <Icon
      type="material-community"
      name={hidePassword ? "eye-outline" : "eye-off-outline"}
      iconStyle={styles.iconRight}
      onPress={() => TODOFixthis()}
      onPressIn={() => setHidePassword(false)}
      onPressOut={() => setHidePassword(true)}
    />
  );
}

function TODOFixthis() {
  //On onPressIn necesita del onPress... ??
}

const styles = StyleSheet.create({
  FoemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerJoin: {
    marginTop: 20,
    width: "95%",
  },
  btnJoin: {
    backgroundColor: "#00a680",
  },
});
