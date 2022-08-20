import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScene from '../scenes/HomePage/HomePage';

const HomeStack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScene} />
    </HomeStack.Navigator>
  );
}
