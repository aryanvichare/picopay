import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import OnboardingScreen from './screens/OnboardingScreen';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Onboarding" 
        component={OnboardingScreen} 
        options={{ headerShown: false}} 
      />
      

    
       
       
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('app', () => App);
