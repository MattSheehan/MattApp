/*
 ** Reducers **
 *  Argument #1: object that contains all of the states
 *  Argument #2: object that describes the update
 *  Rule #1: Never change Arg #1 directly
 *  Rule #2: Always return a value to be used as Arg #1
 */

import React, {useReducer} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import ColorGen from '../components/ColorGen';

const COLOR_FACTOR = 5;

// REDUCER VERSION
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorTBD: (red || green || blue), amount: COLOR_FACTOR || -1*COLOR_FACTOR }
  switch (action.colorTBD) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state // return previous state NO update
        : {...state, red: state.red + action.amount};
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state // return previous state NO update
        : {...state, green: state.green + action.amount};
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state // return previous state NO update
        : {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};

const ColorReducer = () => {
  /*
  navigation.setOptions({
    title: 'Wheel of Colorrrr',
    headerLeft: () => <DrawerIcon navigation={navigation} />,
    headerRight: () => <HomeIcon navigation={navigation} />,
  });
  */
  const [state, runColorReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const {red, green, blue} = state;
  return (
    <View style={styles.container}>
      <Text style={styles.titlestyle}>Learn your RGBs...</Text>
      <Text style={styles.titlestyle}>BUT WITH REDUCERS!</Text>
      <Text style={styles.Redtitle}>Red</Text>
      <ColorGen
        onIncrease={() =>
          runColorReducer({colorTBD: 'red', amount: COLOR_FACTOR})
        }
        onDecrease={() =>
          runColorReducer({colorTBD: 'red', amount: -1 * COLOR_FACTOR})
        }
        color="Red"
      />
      <Text style={styles.Greentitle}>Green</Text>
      <ColorGen
        onIncrease={() =>
          runColorReducer({colorTBD: 'green', amount: COLOR_FACTOR})
        }
        onDecrease={() =>
          runColorReducer({colorTBD: 'green', amount: -1 * COLOR_FACTOR})
        }
        color="Green"
      />
      <Text style={styles.Bluetitle}>Blue</Text>
      <ColorGen
        onIncrease={() =>
          runColorReducer({colorTBD: 'blue', amount: COLOR_FACTOR})
        }
        onDecrease={() =>
          runColorReducer({colorTBD: 'blue', amount: -1 * COLOR_FACTOR})
        }
        color="Blue"
      />
      <View style={styles.colorbox}>
        <View
          style={{
            height: 200,
            width: 200,
            backgroundColor: `rgb(${red},${green},${blue})`,
            borderColor: 'rgb(255,255,255)',
            borderWidth: 2,
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
    height: Dimensions.get('window').height - 75,
    padding: 10,
    borderTopLeftRadius: 7.5,
    borderTopRightRadius: 7.5,
    shadowColor: 'rgb(255,255,255)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: 350,
    backgroundColor: 'rgb(176,196,222)',
  },
  titlestyle: {
    fontSize: 30,
    fontWeight: 'bold',
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
  colorbox: {
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 25,
  },
  colordisplay: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default ColorReducer;
/*
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
        name="ColorReducer"
        component={ColorReducer}
        title="Color Selector 1313"
      />
    </Stack.Navigator>
  );
}
*/
