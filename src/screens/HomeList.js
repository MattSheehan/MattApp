import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import DrawerIcon from '../components/DrawerIcon';
import HomeIcon from '../components/HomeIcon';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeList = ({navigation}) => {
  navigation.setOptions({
    title: 'Driver Notes',
    headerLeft: () => <DrawerIcon navigation={navigation} />,
    headerRight: () => <HomeIcon navigation={navigation} />,
  });

  const driverNames = [
    {name: 'Sheehan', note: 'nothing bad to say at all what a normal dude...'},
    {name: 'Krista', note: 'if you see(hear) her dog run.'},
    {
      name: 'Zaddy',
      note: 'Rumor has it his real name is Ethan. Dont believe it',
    },
    {name: 'Ketcham', note: 'be cautious, he is on the council of Matts.'},
    {name: 'Grant', note: 'thinks he is good at fishing.'},
    {name: 'Andrew', note: 'without a doubt the worst programmer'},
  ];

  return (
    <ImageBackground
      source={require('../../images/Background_img.png')}
      style={styles.backgroundimg}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.titlecontainer}>
            <Text style={styles.titlestyle}>Drivers</Text>
          </View>
          <View style={styles.listcontainer}>
            <FlatList
              keyExtractor={driver => driver.name}
              data={driverNames}
              renderItem={({item}) => {
                return (
                  <Text style={styles.itemstyle}>
                    {item.name} - NOTE: {item.note}
                  </Text>
                );
              }}
            />
          </View>
          <View style={styles.titlecontainer}>
            <Text style={styles.titlestyle}>Drivers...again</Text>
          </View>
          <View style={styles.listcontainer}>
            <FlatList
              keyExtractor={driver => driver.name}
              data={driverNames}
              renderItem={({item}) => {
                return (
                  <Text style={styles.itemstyle}>
                    {item.name} - NOTE: {item.note}
                  </Text>
                );
              }}
            />
          </View>
          <View style={{height: 400}} />
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
  listcontainer: {
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
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: 350,
    backgroundColor: 'rgb(119,136,153)',
    alignSelf: 'center',
  },
  titlecontainer: {
    paddingTop: 5,
    paddingBottom: 25,
  },
  titlestyle: {
    fontSize: 50,
    color: 'rgb(30, 35, 75)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  itemstyle: {
    marginVertical: 15,
    color: 'rgb(255,255,255)',
    fontSize: 18,
    paddingLeft: 50,
    paddingRight: 50,
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
        headerTintColor: 'rgb(125, 245, 180)',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="HomeList" component={HomeList} />
    </Stack.Navigator>
  );
}
