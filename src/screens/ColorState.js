import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import ColorGen from '../components/ColorGen';

const COLOR_FACTOR = 5;

const ColorState = () => {
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
      <Text style={styles.titlestyle}>Learn your RGBs!</Text>
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
    alignSelf: 'center',
  },
  titlestyle: {
    fontSize: 34,
    color: 'rgb(35, 135, 255)',
    fontStyle: 'italic',
    fontWeight: 'bold',
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
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

export default ColorState;
