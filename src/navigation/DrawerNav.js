import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import HomeList from '../screens/HomeList';
import ImageScreen from '../screens/ImageScreen';
import ColorScreen from '../screens/ColorScreen';
import ProfileScreen from '../screens/settings/Profile';
import SettingsScreen from '../screens/settings/Settings';
import LoginScreen from '../screens/Login';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      drawerType="slide"
      edgeWidth={0}
      drawerStyle={{backgroundColor: 'rgb(30, 30, 40)'}}
      drawerContentOptions={{
        activeTintColor: 'dodgerblue',
        inactiveTintColor: 'rgb(245,245,245)',
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="HomeList"
        component={HomeList}
        options={{title: 'Notes'}}
      />
      <Drawer.Screen
        name="ImageScreen"
        component={ImageScreen}
        options={{title: 'Vibe Checker 3000'}}
      />
      <Drawer.Screen
        name="ColorScreen"
        component={ColorScreen}
        options={{title: 'Color Selector 1313'}}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Log Out'}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
/* 

  <Drawer.Screen
    name="ColorReducerScreen"
    component={ColorReducerScreen}
    options={{title: 'Color Selector 1313'}}
  />

*/
