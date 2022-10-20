import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { UsersScreen } from "~screens/app";

import ScreenNames from "./routes";

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.USERS} component={UsersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
export { default as ScreenNames } from "./routes";
