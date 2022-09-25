import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopPlaces from "../../screens/top-places/TopPlaces";

const Stack = createNativeStackNavigator();

export default function PlacesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-places"
        component={TopPlaces}
        options={{ title: "TopPlaces" }}
      />
    </Stack.Navigator>
  );
}
