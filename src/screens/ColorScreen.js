import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import ColorGen from '../components/ColorGen';
import DrawerIcon from '../components/DrawerIcon';
import HomeIcon from '../components/HomeIcon';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

const COLOR_FACTOR = 5;

const ColorScreen = ({navigation, route}) => {
  navigation.setOptions({
    title: 'Wheel of Colorrrr',
    headerLeft: () => <DrawerIcon navigation={navigation} />,
    headerRight: () => <HomeIcon navigation={navigation} />,
  });

  // 3 cases for resetting RGB
  const setColor = (color, change) => {
    switch (color) {
      case 'Red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'Green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case 'Blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
    }
  };

  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.titlecontainer}>
          <Text style={styles.titlestyle}>Learn your RGBs!</Text>
        </View>
        <Text style={styles.Redtitle}>Red</Text>
        <ColorGen
          onIncrease={() => setColor('Red', COLOR_FACTOR)}
          onDecrease={() => setColor('Red', -1 * COLOR_FACTOR)}
          color="Red"
        />
        <Text style={styles.Greentitle}>Green</Text>
        <ColorGen
          onIncrease={() => setColor('Green', COLOR_FACTOR)}
          onDecrease={() => setColor('Green', -1 * COLOR_FACTOR)}
          color="Green"
        />
        <Text style={styles.Bluetitle}>Blue</Text>
        <ColorGen
          onIncrease={() => setColor('Blue', COLOR_FACTOR)}
          onDecrease={() => setColor('Blue', -1 * COLOR_FACTOR)}
          color="Blue"
        />
        <View style={styles.colorbox}>
          <View
            style={{
              height: 200,
              width: 200,
              backgroundColor: `rgb(${red},${green},${blue})`,
            }}
          />
          <Text style={styles.colordisplay}>
            Your rgb( {red}, {green}, {blue} )
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 75,
    padding: 10,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'rgb(55,55,55)',
  },
  titlestyle: {
    fontSize: 30,
    color: 'rgb(35, 135, 255)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  Redtitle: {
    fontSize: 30,
    padding: 10,
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'rgb(250, 30, 30)',
  },
  Greentitle: {
    fontSize: 30,
    padding: 10,
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'rgb(30, 250, 30)',
  },
  Bluetitle: {
    fontSize: 30,
    padding: 10,
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'rgb(30, 30, 250)',
  },
  titlecontainer: {
    borderBottomColor: 'rgb(55,135,255)',
    borderTopColor: 'rgb(55,55,55)',
    borderLeftColor: 'rgb(55,55,55)',
    borderRightColor: 'rgb(55,55,55)',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  colorbox: {
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 25,
  },
  colordisplay: {
    fontSize: 20,
    color: 'rgb(205,205,205)',
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
