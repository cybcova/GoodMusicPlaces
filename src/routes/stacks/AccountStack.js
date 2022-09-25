import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../../screens/account/Account";
import LoginScreen from "../../screens/account/LoginScreen";
import { SignUpScreen } from "../../screens/account/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
                name="account"
                component={Account}
                options={{title: "Account"}}/> */}
      <Stack.Screen
        name="login-screen"
        component={LoginScreen}
        options={{ title: "Log In" }}
      />
      <Stack.Screen
        name="sign-up-screen"
        component={SignUpScreen}
        options={{ title: "Sign Up" }}
      />
    </Stack.Navigator>
  );
}
