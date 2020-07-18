import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Background = ({imageSource}) => {
  return <ImageBackground source={imageSource} style={styles.backgroundimg} />;
};

const styles = StyleSheet.create({
  backgroundimg: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
    backgroundColor: 'rgb(55,55,55)',
    width: 300,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titlestyle: {
    fontSize: 28,
    color: 'rgb(30, 105, 205)',
    fontStyle: 'italic',
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
});

export default Background;
