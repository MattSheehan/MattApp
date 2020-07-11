import * as React from 'react';
import {Button, Text, View, TextInput, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = ({navigation}) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(25,25,25)',
        },
        headerTintColor: 'rgb(135, 255, 185)',
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
      }}>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
      <SettingsStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;
