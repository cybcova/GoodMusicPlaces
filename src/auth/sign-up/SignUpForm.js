import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { onChange } from "react-native-reanimated";
//import { styles } from "../../screens/account/SignUpScreen";

export default function SignUpForm() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setRepeatPassword] = useState(true);
  const [formSignIn, setFormSignIn] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onChangeForm = (e, type) => {
    setFormSignIn({ ...formSignIn, [type]: e.nativeEvent.text });
  };
  //...(lo que traia)
  //[] para que no agarre contenido lit

  return (
    <View>
      <Input
        placeholder="Email"
        containerStyle={styles.inputForm}
        onChange={(e) => onChangeForm(e, "email")}
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
        onChange={(e) => onChangeForm(e, "password")}
        password={true}
        secureTextEntry={hidePassword}
        rightIcon={visibilityPassword(hidePassword, setHidePassword)}
      />
      <Input
        placeholder="Repeat Password"
        containerStyle={styles.inputForm}
        onChange={(e) => onChangeForm(e, "repeatPassword")}
        password={true}
        secureTextEntry={hideRepeatPassword}
        rightIcon={visibilityPassword(hideRepeatPassword, setRepeatPassword)}
      />
      <Button
        title="Join"
        containerStyle={styles.btnContainerJoin}
        buttonStyle={styles.btnJoin}
        onPress={() => console.log(formSignIn)}
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
