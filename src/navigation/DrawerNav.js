import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import HomeList from '../screens/HomeList';
import ImageScreen from '../screens/ImageScreen';
import ColorScreen from '../screens/ColorScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="slide"
      edgeWidth={0}
      drawerStyle={{backgroundColor: 'rgb(55, 55, 55)'}}
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
