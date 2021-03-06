/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/components/screens/Home';
import FormStep1 from './src/components/screens/FormStep1';
import FormStep2 from './src/components/screens/FormStep2';
import FormSuccess from './src/components/screens/FormSuccess';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FormStep1" component={FormStep1} />
        <Stack.Screen name="FormStep2" component={FormStep2} />
        <Stack.Screen name="FormSuccess" component={FormSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
