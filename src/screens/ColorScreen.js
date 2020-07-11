import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorGen from '../components/ColorGen';
import DrawerIcon from '../components/DrawerIcon';
import HomeIcon from '../components/HomeIcon';
import {createStackNavigator} from '@react-navigation/stack';

const COLOR_FACTOR = 10;

const ColorScreen = ({navigation, route}) => {
  navigation.setOptions({
    title: 'Wheel of Colorrrr',
    headerLeft: () => <DrawerIcon navigation={navigation} />,
    headerRight: () => <HomeIcon navigation={navigation} />,
  });
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  console.log(red);
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.titlestyle}>Learn your RGBs!</Text>
      </View>
      <ColorGen
        onIncrease={() => setRed(red + COLOR_FACTOR)}
        onDecrease={() => setRed(red - COLOR_FACTOR)}
        color="Red"
      />
      <ColorGen
        onIncrease={() => setGreen(green + COLOR_FACTOR)}
        onDecrease={() => setGreen(green - COLOR_FACTOR)}
        color="Green"
      />
      <ColorGen
        onIncrease={() => setBlue(blue + COLOR_FACTOR)}
        onDecrease={() => setBlue(blue - COLOR_FACTOR)}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(55,55,55)',
  },
  titlestyle: {
    fontSize: 30,
    color: 'rgb(35, 135, 255)',
    fontStyle: 'italic',
    textAlign: 'center',
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
    color: 'rgb(200,200,200)',
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
