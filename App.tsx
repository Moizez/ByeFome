import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/redux'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/navigation/MainStack';

import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App


