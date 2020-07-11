import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CountingGame = ({navigation, route}) => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.countcontainer}>
      <View style={styles.titlecontainer}>
        <Text style={styles.gametitle}>Counting Game!</Text>
      </View>
      <View style={styles.buttonstyle}>
        <TouchableOpacity
          onPress={() => {
            setCounter(counter + 1);
          }}>
          <Icon name="plus" size={50} color="rgb(30, 125, 255)" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCounter(counter - 1);
          }}>
          <Icon name="minus" size={50} color="rgb(255, 70, 70)" />
        </TouchableOpacity>
      </View>
      <Text style={styles.gamescoretitle}>Current Count</Text>
      <Text style={styles.gamescore}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  countcontainer: {
    flex: 1,
    paddingTop: 69,
  },
  gametitle: {
    fontSize: 30,
    color: 'rgb(35, 145, 255)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  gamescoretitle: {
    paddingTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'rgb(255, 255, 255)',
  },
  gamescore: {
    paddingTop: 20,
    fontSize: 24,
    textAlign: 'center',
    color: 'rgb(135, 255, 185)',
  },
  buttonstyle: {
    paddingTop: 25,
    alignItems: 'center',
  },
  titlecontainer: {
    borderBottomColor: 'rgb(55,135,255)',
    borderTopColor: 'rgb(55,55,55)',
    borderLeftColor: 'rgb(55,55,55)',
    borderRightColor: 'rgb(55,55,55)',
    borderStyle: 'solid',
    borderWidth: 2,
  },
});

export default CountingGame;
