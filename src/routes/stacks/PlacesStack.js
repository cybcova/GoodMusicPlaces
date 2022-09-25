import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Places from "../../screens/places/Places";

const Stack = createNativeStackNavigator();

export default function PlacesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="places"
        component={Places}
        options={{ title: "Places" }}
      />
    </Stack.Navigator>
  );
}
