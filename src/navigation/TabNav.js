/*
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsStackScreen from './SettingsNav';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerNav from './DrawerNav';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'road' : 'road';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'gears' : 'gears';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'rgb(135, 255, 165)',
        inactiveTintColor: 'rgb(205, 205, 205)',
        activeBackgroundColor: 'rgb(30, 30, 40)',
        inactiveBackgroundColor: 'rgb(30, 30, 40)',
        safeAreaInsets: {flex: 1, bottom: 0, top: 0},
      }}>
      <Tab.Screen name="Home" component={DrawerNav} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
};
*/
