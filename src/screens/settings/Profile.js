import * as React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerIcon from '../../components/DrawerIcon';
import HomeIcon from '../../components/HomeIcon';
import {TextButtonSolidSecondary} from '../../components/common/Buttons';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreen = ({navigation, route}) => {
  navigation.setOptions({
    title: 'Profile',
    headerLeft: () => <DrawerIcon navigation={navigation} />,
    headerRight: () => <HomeIcon navigation={navigation} />,
  });

  const [username, setUsername] = React.useState('');
  const [carMake, setCarMake] = React.useState('');
  const [endPoint, setEndPoint] = React.useState('');
  const [yeeYEE, setYeeYEE] = React.useState('');

  const {colors, dark} = useTheme();

  return (
    <ImageBackground
      source={require('../../../images/Background_img.png')}
      style={styles.backgroundimg}>
      <View style={{padding: 20}} />
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <Text style={styles.titlestyle}>Your Username</Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={24} color={colors.lightGrey} />
            <TextInput
              style={[styles.input, {color: colors.text}]}
              placeholder="M@_Sheehan"
              placeholderTextColor={colors.lightGrey}
              keyboardAppearance={dark ? 'dark' : 'light'}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.titlestyle}>Your Password</Text>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={24} color={colors.lightGrey} />
            <TextInput
              style={[styles.input, {color: colors.text}]}
              placeholder="M@_Sheehan"
              placeholderTextColor={colors.lightGrey}
              keyboardAppearance={dark ? 'dark' : 'light'}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.titlestyle}>
            What kinda vehicle do you drive?
          </Text>
          <View style={styles.inputContainer}>
            <Icon name="car" size={24} color={colors.lightGrey} />
            <TextInput
              style={[styles.input, {color: colors.text}]}
              placeholder="M@_Sheehan"
              placeholderTextColor={colors.lightGrey}
              keyboardAppearance={dark ? 'dark' : 'light'}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.titlestyle}>Where ya heading?</Text>
          <View style={styles.inputContainer}>
            <Icon name="road" size={24} color={colors.lightGrey} />
            <TextInput
              style={[styles.input, {color: colors.text}]}
              placeholder="M@_Sheehan"
              placeholderTextColor={colors.lightGrey}
              keyboardAppearance={dark ? 'dark' : 'light'}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.titlestyle}>
            How often do you yeeYEE in an hour?
          </Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={24} color={colors.lightGrey} />
            <TextInput
              style={[styles.input, {color: colors.text}]}
              placeholder="M@_Sheehan"
              placeholderTextColor={colors.lightGrey}
              keyboardAppearance={dark ? 'dark' : 'light'}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <View style={{padding: 10}} />

          <View style={styles.buttonContainer}>
            <TextButtonSolidSecondary
              label="DONE"
              onPress={() => {
                navigation.navigate('Settings', {user: username});
              }}
              icon="arrow-right"
            />
          </View>
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
    height: 400,
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
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    width: 350,
    backgroundColor: 'rgb(176,196,222)',
    alignSelf: 'center',
  },
  titlestyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'rgb(30,30,100)',
    paddingTop: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(225,225,225)',
  },
  input: {
    width: 300,
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 10,
  },
  buttonContainer: {
    backgroundColor: 'rgb(55,55,75)',
    fontWeight: 'bold',
    borderTopLeftRadius: 7.5,
    borderTopRightRadius: 7.5,
    borderBottomLeftRadius: 7.5,
    borderBottomRightRadius: 7.5,
    shadowColor: 'rgb(255,255,255)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
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
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
