import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrawerIcon = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}>
      <Icon
        name="bars"
        size={25}
        color="rgb(205, 205, 205)"
        style={styles.somestyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  somestyle: {
    paddingLeft: 15,
  },
});

export default DrawerIcon;
// props = {navigation, ...}
