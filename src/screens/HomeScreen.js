import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import DrawerIcon from '../components/DrawerIcon';
import {createStackNavigator} from '@react-navigation/stack';
import CountingGame from '../components/CountingGame';
import CountReducer from '../components/CountReducer';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    <ImageBackground
      source={require('../../images/Background_img.png')}
      style={styles.backgroundimg}>
      <ScrollView>
        <SafeAreaView>
          <CountingGame />
          <View style={{padding: 50}} />
          <CountReducer />
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundimg: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
    height: Dimensions.get('window').height - 75,
    padding: 10,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'rgb(55,55,55)',
  },
});

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(30, 30, 40)',
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
