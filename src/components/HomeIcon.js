import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeIcon = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Home');
      }}>
      <Icon
        name="home"
        size={30}
        color="rgb(115, 225, 175)"
        style={{paddingRight: 10}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonstyle: {
    color: 'white',
  },
});

export default HomeIcon;
