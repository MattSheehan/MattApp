import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ImageDetail from '../components/ImageDetail';
import DrawerIcon from '../components/DrawerIcon';
import HomeIcon from '../components/HomeIcon';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

const ImageScreen = ({navigation}) => {
  navigation.setOptions({
    title: 'Vibe Checker 3000',
    headerLeft: () => <DrawerIcon navigation={navigation} />,
    headerRight: () => <HomeIcon navigation={navigation} />,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titlestyle}>~ Select your vibe ~</Text>
      <ScrollView>
        <SafeAreaView>
          <TouchableOpacity style={styles.touchme}>
            <ImageDetail
              imageSource={require('../../images/beach.jpg')}
              title="Beach"
              score={9}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchme}>
            <ImageDetail
              imageSource={require('../../images/forest.jpg')}
              title="Prying Jungles"
              score={7}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchme}>
            <ImageDetail
              imageSource={require('../../images/mountain.jpg')}
              title="Alien Abduction"
              score={0.5}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchme}>
            <ImageDetail
              imageSource={require('../../images/beach.jpg')}
              title="De ja vu"
              score={10}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchme}>
            <ImageDetail
              imageSource={require('../../images/cocky.jpg')}
              title="Cocky"
              score={69}
            />
          </TouchableOpacity>
          <View style={{paddingTop: 50, height: 200}} />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'rgb(55,55,55)',
  },
  titlestyle: {
    textAlign: 'center',
    color: 'dodgerblue',
    justifyContent: 'center',
    fontSize: 28,
    fontStyle: 'italic',
  },
  touchme: {
    borderColor: 'rgb(55,135,255)',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 10,
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
        headerTintColor: 'rgb(135, 255, 185)',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="ImageScreen"
        component={ImageScreen}
        options={{title: 'Vibe Checker 3000'}}
      />
    </Stack.Navigator>
  );
}
