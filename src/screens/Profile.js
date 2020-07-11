import * as React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  const [firstName, setFirstName] = React.useState('');
  const [carMake, setCarMake] = React.useState('');
  const [endPoint, setEndPoint] = React.useState('');
  const [yeeYEE, setYeeYEE] = React.useState('');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.namecontainer}>
        <Text style={styles.titlestyle}>Enter your Name</Text>
        <TextInput
          multiline
          placeholder="first name?"
          style={styles.changenamestyle}
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={styles.titlestyle}>What kinda vehicle do you drive?</Text>
        <TextInput
          multiline
          placeholder="Include car make and year"
          style={styles.changenamestyle}
          value={carMake}
          onChangeText={setCarMake}
        />
        <Text style={styles.titlestyle}>Where ya heading?</Text>
        <TextInput
          multiline
          placeholder="Noneya?"
          style={styles.changenamestyle}
          value={endPoint}
          onChangeText={setEndPoint}
        />
        <Text style={styles.titlestyle}>
          How often do you yeeYEE in an hour?
        </Text>
        <TextInput
          multiline
          placeholder="You dont yeeYEE?"
          style={styles.changenamestyle}
          value={yeeYEE}
          onChangeText={setYeeYEE}
        />
      </ScrollView>
      <View style={{paddingBottom: 300, alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('Settings', {post: firstName});
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
  container: {
    flex: 1,
    backgroundColor: 'rgb(55,55,55)',
  },
  changenamestyle: {
    height: 30,
    width: 415,
    textAlign: 'center',
    backgroundColor: 'rgb(225,225,225)',
    borderColor: 'rgb(35, 155, 255)',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  namecontainer: {
    alignContent: 'center',
    textAlign: 'center',
  },
  titlestyle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'dodgerblue',
    paddingTop: 15,
  },
  buttoncontainer: {
    padding: 10,
    height: 55,
    width: 100,
    alignItems: 'center',
    borderColor: 'rgb(25,105,205)',
    borderStyle: 'solid',
    borderWidth: 2,
  },
});

export default ProfileScreen;
