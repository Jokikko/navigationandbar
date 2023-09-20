
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <stack.Navigator initialRouteName="Home">
      <stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerTitle: 'Home',
      }}
      />
      <stack.Screen
      name="Second"
      component={SecondScreen}
      options={{
        title: 'Second',
        hedertitle: 'Second'
      }}
      />
    </stack.Navigator>
    </NavigationContainer>
  );
}


