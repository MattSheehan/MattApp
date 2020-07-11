import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import DrawerIcon from '../components/DrawerIcon';
import {createStackNavigator} from '@react-navigation/stack';
import CountingGame from './CountingGame';

const HomeScreen = ({navigation, route}) => {
  navigation.setOptions({
    title: 'Home',
    headerLeft: () => <DrawerIcon navigation={navigation} />,
  });
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);
  return (
    <ScrollView style={styles.homestyle}>
      <View>
        <View style={styles.titlecontainer}>
          <Text style={styles.titlestyle}>Posts</Text>
        </View>
        <Text style={styles.postmsgstyle}>(To make a post go to Details)</Text>
        <Text style={styles.poststyle}>{route.params?.post}</Text>
      </View>
      <CountingGame />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homestyle: {
    flex: 1,
    backgroundColor: 'rgb(55, 55, 55)',
  },
  titlestyle: {
    fontSize: 30,
    color: 'rgb(35, 135, 255)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  postmsgstyle: {
    textAlign: 'center',
    color: 'rgb(205, 205, 205)',
    fontSize: 12,
    paddingBottom: 10,
  },
  poststyle: {
    color: 'rgb(255, 255, 255)',
    height: 100,
    width: 400,
    backgroundColor: 'rgb(100,100,100)',
    borderColor: 'rgb(55,155,255)',
    borderStyle: 'solid',
    borderWidth: 2,
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
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
