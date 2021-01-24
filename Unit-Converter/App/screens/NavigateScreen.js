import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";
import ConverterScreen from "./ConverterScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Converter"
      component={ConverterScreen}
      options={({ route }) => ({
        title: route.params.label + " Conversion",
        headerStyle: { backgroundColor: colors.primary },
      })}
    />
  </Stack.Navigator>
);

function NavigateScreen(props) {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default NavigateScreen;
