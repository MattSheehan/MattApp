import * as React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import DrawerIcon from '../components/DrawerIcon';
import HomeIcon from '../components/HomeIcon';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeList = ({navigation}) => {
  navigation.setOptions({
    title: 'Driver Notes',
    headerLeft: () => <DrawerIcon navigation={navigation} />,
    headerRight: () => <HomeIcon navigation={navigation} />,
  });

  const driverNames = [
    {name: 'Sheehan', note: 'nothing bad to say at all what a normal dude...'},
    {name: 'Krista', note: 'if you see(hear) her dog run.'},
    {name: 'Zaddy', note: 'likes to drive fast and eat ass.'},
    {name: 'Ketcham', note: 'be cautious, he is on the council of Matts.'},
    {name: 'Grant', note: 'thinks he is good at fishing.'},
    {name: 'Andrew', note: 'without a doubt the worst programmer'},
  ];

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(50,50,50)',
  },
  listcontainer: {
    borderColor: 'rgb(25,105,205)',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  titlecontainer: {
    paddingTop: 5,
    paddingBottom: 25,
  },
  titlestyle: {
    fontSize: 50,
    color: 'rgb(30, 135, 255)',
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

const Something = () => <Text>Something</Text>;

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
      <Stack.Screen name="HomeList" component={HomeList} />
      <Stack.Screen name="Something" component={Something} />
    </Stack.Navigator>
  );
}
