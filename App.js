import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from'./assets/color/colors.js';
import Home from './components/Home'


const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
      <Stack.Screen
          name="Home"
          component={Home} options={{
            headerShown: false,
          }}
         
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}