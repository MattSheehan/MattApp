import React from 'react';
import {View, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import DrawerIcon from '../components/DrawerIcon';
import HomeIcon from '../components/HomeIcon';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import ColorReducer from './ColorReducer';
import ColorState from './ColorState';

const ColorScreen = ({navigation}) => {
  navigation.setOptions({
    title: 'Wheel of Colorrrr',
    headerLeft: () => <DrawerIcon navigation={navigation} />,
    headerRight: () => <HomeIcon navigation={navigation} />,
  });

  return (
    <ImageBackground
      source={require('../../images/Background_img.png')}
      style={styles.backgroundimg}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.reducercontainer}>
            <ColorState />
          </View>

          <View style={{height: 200}} />
          <View style={styles.reducercontainer}>
            <ColorReducer />
          </View>
          <View style={{height: 200}} />
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundimg: {
    flex: 1,
    width: null,
    height: null,
  },
  reducercontainer: {
    alignContent: 'center',
    alignSelf: 'center',
  },
});

const Stack = createStackNavigator();
export default function() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(25, 25, 25)',
        },
        headerTintColor: 'rgb(125, 255, 185)',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="ColorScreen"
        component={ColorScreen}
        title="Color Selector 1313"
      />
    </Stack.Navigator>
  );
}
