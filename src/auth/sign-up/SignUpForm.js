import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { onChange } from "react-native-reanimated";
import { initialValues, validationSchema } from "./SignUpForm.data";
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpForm() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setRepeatPassword] = useState(true);
  const [formSignIn, setFormSignIn] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
      console.log("AUTH::::::::::");
      console.log(auth);
      const auth = getAuth();
      console.log("AUTH::::::::::");
      console.log(auth);
      createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential);
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
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
      <Input
        placeholder="Repeat Password"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={hideRepeatPassword}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
        rightIcon={visibilityPassword(hideRepeatPassword, setRepeatPassword)}
      />
      <Button
        title="Join"
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
