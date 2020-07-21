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

const PAYLOAD_CONST = 5;
const MAX = 255;
const MIN = 0;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: (change_red || change_green || change_blue), payload: PAYLOAD_CONST || -PAYLOAD_CONST }

  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > MAX ||
        state.red + action.payload < MIN
        ? state // return previous state NO update
        : {...state, red: state.red + action.payload};
    case 'change_green':
      return state.green + action.payload > MAX ||
        state.green + action.payload < MIN
        ? state // return previous state NO update
        : {...state, green: state.green + action.payload};
    case 'change_blue':
      return state.blue + action.payload > MAX ||
        state.blue + action.payload < MIN
        ? state // return previous state NO update
        : {...state, blue: state.blue + action.payload};
    default:
      return state;
  }
};

const ColorReducer = () => {
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
          runColorReducer({type: 'change_red', payload: PAYLOAD_CONST})
        }
        onDecrease={() =>
          runColorReducer({type: 'change_red', payload: -1 * PAYLOAD_CONST})
        }
        color="Red"
      />
      <Text style={styles.Greentitle}>Green</Text>
      <ColorGen
        onIncrease={() =>
          runColorReducer({type: 'change_green', payload: PAYLOAD_CONST})
        }
        onDecrease={() =>
          runColorReducer({type: 'change_green', payload: -1 * PAYLOAD_CONST})
        }
        color="Green"
      />
      <Text style={styles.Bluetitle}>Blue</Text>
      <ColorGen
        onIncrease={() =>
          runColorReducer({type: 'change_blue', payload: PAYLOAD_CONST})
        }
        onDecrease={() =>
          runColorReducer({type: 'change_blue', payload: -1 * PAYLOAD_CONST})
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
    borderBottomLeftRadius: 7.5,
    borderBottomRightRadius: 7.5,
    shadowColor: 'rgb(255,255,255)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
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
