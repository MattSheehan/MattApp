import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

/* This is for passing callbacks to children */

const ColorGen = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonstyle} onPress={onIncrease}>
        <Text style={styles.buttontext}>Increase {color}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonstyle} onPress={onDecrease}>
        <Text style={styles.buttontext}>Decrease {color}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titlestyle: {
    fontSize: 30,
    padding: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonstyle: {
    padding: 2,
    alignItems: 'center',
  },
  buttontext: {
    color: 'rgb(235,235,255)',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ColorGen;
