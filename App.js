import React from "react";
import { StyleSheet, KeyboardAvoidingView, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./lib/auth";

import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import ViewQR from './screens/qr';
import PickTransport from "./screens/pickTransport";
import ActiveRide from "./screens/activeRide";
import PickSpace from "./screens/pickSpace";
import ViewSpace from "./screens/viewSpace";
import ActiveSpace from "./screens/activeSpace";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          style={{ flex: 1 }}>
          <AuthProvider>
            <Stack.Navigator>
            <Stack.Screen 
                name="PickTransport" 
                component={PickTransport} 
                options={{ headerShown: false}} 
              />
            <Stack.Screen 
                name="PickSpace" 
                component={PickSpace} 
                options={{ headerShown: false}} 
              />
              <Stack.Screen 
                name="ViewSpace" 
                component={ViewSpace} 
                options={{ headerShown: false}} 
              />
              <Stack.Screen 
                name="ActiveSpace" 
                component={ActiveSpace} 
                options={{ headerShown: false}} 
              />
            <Stack.Screen 
                name="ActiveRide" 
                component={ActiveRide} 
                options={{ headerShown: false}} 
              />
              
              <Stack.Screen 
                name="ViewQR" 
                component={ViewQR} 
                options={{ headerShown: false}} 
              />
              <Stack.Screen
                name='Onboarding'
                component={OnboardingScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Signup'
                component={SignupScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </AuthProvider>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
