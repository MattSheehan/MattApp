import * as React from 'react';
import {Button, Text, View, TextInput, StyleSheet} from 'react-native';
import DrawerIcon from '../components/DrawerIcon';

const SettingsScreen = ({navigation, route}) => {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);
  return (
    <View style={styles.container}>
      <Text style={styles.titlestyle}>Welcome {route.params?.post}</Text>
      <Button
        title="Edit your Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homestyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -350,
  },
  titlestyle: {
    fontSize: 40,
    color: 'dodgerblue',
    fontStyle: 'italic',
    alignContent: 'center',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'rgb(55,55,55)',
  },
  namestyle: {
    alignContent: 'center',
    textAlign: 'center',
    margin: 10,
  },
  tabStyle: {
    flexDirection: 'row',
    marginLeft: 20,
  },
});

export default SettingsScreen;
