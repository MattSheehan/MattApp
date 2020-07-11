import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} />
      <View>
        <Text style={styles.imageText}>{title}</Text>
        <Text style={styles.scoreStyle}>Critics Score - {score}/10</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darksalmon',
    paddingRight: 200,
  },
  container: {
    flexDirection: 'row',
    margin: 2,
  },
  scoreStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgb(205,205,205)',
  },
});

export default ImageDetail;
