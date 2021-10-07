import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';

//Navigations
import { NavigationContainer } from '@react-navigation/native'

import MainStack from './src/navigation/MainStack';

const App = () => {
  return (
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>
  );
}

export default App


