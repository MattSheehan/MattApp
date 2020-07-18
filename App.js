// Matt's App

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './src/navigation/MainNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
