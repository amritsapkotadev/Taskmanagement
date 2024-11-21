import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/login";
import Welcome from "./screens/Welcome";
import option from "./screens/option";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Editprofile from "./screens/editprofile";
import TermsAndConditions from "./screens/termsandconditions";
const Stack = createStackNavigator();

export default function Modal() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome }  options={{headerShown:false}}/>
        <Stack.Screen name="option" component={option} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Stack.Screen name="Editprofile" component={Editprofile} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
