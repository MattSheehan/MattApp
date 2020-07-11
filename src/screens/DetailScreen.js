import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import DrawerIcon from '../components/DrawerIcon';
import HomeIcon from '../components/HomeIcon';
import {createStackNavigator} from '@react-navigation/stack';

const DetailScreen = ({navigation, route}) => {
  navigation.setOptions({
    title: 'Detail Screen',
    headerLeft: () => <DrawerIcon navigation={navigation} />,
    headerRight: () => <HomeIcon navigation={navigation} />,
  });

  const [postText, setPostText] = React.useState('');

  return (
    <View style={styles.homestyle}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.titlestyle}>
          {' '}
          Write a message for your home screen{' '}
        </Text>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={styles.changenamestyle}
          value={postText}
          onChangeText={setPostText}
        />
      </View>
      <View style={{paddingTop: 20, alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('Home', {post: postText});
          }}>
          <Text
            style={{
              fontSize: 25,
              color: 'rgb(55, 155, 255)',
              textAlign: 'center',
            }}>
            DONE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homestyle: {
    flex: 1,
    backgroundColor: 'rgb(55,55,55)',
  },
  titlestyle: {
    fontSize: 20,
    color: 'rgb(30, 125, 255)',
    fontStyle: 'italic',
    paddingTop: 20,
    paddingBottom: 20,
  },
  buttoncontainer: {
    paddingTop: 10,
    height: 55,
    width: 100,
    alignItems: 'center',
    borderColor: 'rgb(25,105,205)',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  changenamestyle: {
    height: 150,
    width: 390,
    padding: 10,
    backgroundColor: 'rgb(230, 230, 230)',
  },
});

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(25,25,25)',
        },
        headerTintColor: 'rgb(125, 245, 180)',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
