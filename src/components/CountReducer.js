import React, {useReducer} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AMOUNT = 1;

// Step 2
const reducer = (state, action) => {
  // state === { increase_count: number, decrease_count: number }
  // action === { type: (increase_count || decrease_count ), payload: PAYLOAD}

  switch (action.type) {
    case 'increase_count':
      return {...state, count: state.count + action.payload};
    case 'decrease_count':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};

const CountReducer = () => {
  // Step 1
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <View style={styles.container}>
      <Text style={styles.gametitle}>Counting Game With Reducers!</Text>
      <View style={styles.buttonstyle}>
        <TouchableOpacity
          onPress={() => {
            // step 3
            dispatch({type: 'increase_count', payload: AMOUNT});
          }}>
          <Icon name="plus" size={50} color="rgb(30, 125, 255)" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // step 3
            dispatch({type: 'decrease_count', payload: AMOUNT});
          }}>
          <Icon name="minus" size={50} color="rgb(255, 70, 70)" />
        </TouchableOpacity>
      </View>
      <Text style={styles.gamescoretitle}>Current Count</Text>
      <Text style={styles.gamescore}>{state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    alignSelf: 'center',
  },
  gametitle: {
    fontSize: 30,
    color: 'rgb(0,0,125)',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gamescoretitle: {
    paddingTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  gamescore: {
    paddingTop: 20,
    fontSize: 24,
    textAlign: 'center',
  },
  buttonstyle: {
    padding: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 80,
    marginRight: 80,
  },
});

export default CountReducer;
