import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen";

// Tema React Native Paper
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#6200EE",
    accent: "#03DAC6",
    background: "#F6F6F6",
    surface: "#FFFFFF",
    text: "#000000",
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "To-Do List" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}