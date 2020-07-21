// Matt's App

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNav from './src/navigation/DrawerNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
