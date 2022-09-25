import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../../screens/search/Search";

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Search}
        options={{ title: "Search" }}
      />
    </Stack.Navigator>
  );
}
