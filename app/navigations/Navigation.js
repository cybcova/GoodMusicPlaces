import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { Switch } from "react-native-gesture-handler";

import AccountStack from "./stacks/AccountStack";
import FavoritesStack from "./stacks/FavoritesStack";
import PlacesStack from "./stacks/PlacesStack";
import SearchStack from "./stacks/SearchStack";
import TopPlacesStack from "./stacks/TopPlacesStack";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="places-stack"
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor :"#000000",
                    tabBarIcon: ({color}) => screenOptions(route,color),
                })}
            >
                <Tab.Screen 
                    name="places-stack" 
                    component={PlacesStack}
                    options={{
                        title:"Places",
                        headerShown:false
                    }}/>
                <Tab.Screen 
                    name="favorites-stack"  
                    component={FavoritesStack}
                    options={{
                        title:"Favs",
                        headerShown:false
                    }}/>
                <Tab.Screen 
                    name="top-places-stack"
                    component={TopPlacesStack}
                    options={{
                        title:"Top",
                        headerShown:false
                    }}/>
                <Tab.Screen 
                    name="search-stack" 
                    component={SearchStack}
                    options={{
                        title:"Search",
                        headerShown:false
                    }}/>
                <Tab.Screen 
                    name="account-stack"
                    component={AccountStack}
                    options={{
                        title:"Account",
                        headerShown:false
                    }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions (route, color){
    let iconName;

    switch(route.name){
        case "places-stack":
            iconName = "compass-outline"
            break;
        case "favorites-stack":
            iconName = "heart-outline"
            break;
        case "top-places-stack":
            iconName = "star-outline"
            break;
        case "search-stack":
            iconName = "magnify"
            break;
        case "account-stack":
            iconName = "home-outline"
            break;
        default:
            break;
    }
    return(
        <Icon type="material-community" name={iconName} size={22} color={color}/>
    )
}