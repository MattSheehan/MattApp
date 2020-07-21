import * as React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerIcon from '../../components/DrawerIcon';
import HomeIcon from '../../components/HomeIcon';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';

const SettingsScreen = ({navigation, route}) => {
  navigation.setOptions({
    title: 'Settings',
    headerLeft: () => <DrawerIcon navigation={navigation} />,
    headerRight: () => <HomeIcon navigation={navigation} />,
  });

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {colors, dark} = useTheme();
  return (
    <ImageBackground
      source={require('../../../images/Background_img.png')}
      style={styles.backgroundimg}>
      <View style={{padding: 30}} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.titlestyle}>Welcome {route.params?.post}</Text>
        <Text>Your Username</Text>
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
        <Text>Your Password</Text>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color={colors.lightGrey} />
          <TextInput
            style={[styles.input, {color: colors.text}]}
            placeholder="theLetterY47times"
            placeholderTextColor={colors.lightGrey}
            keyboardAppearance={dark ? 'dark' : 'light'}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={{padding: 20}} />
        <Button
          title="Edit your Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundimg: {
    flex: 1,
    width: null,
    height: null,
  },
  homestyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -350,
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
    fontSize: 34,
    color: 'rgb(35, 135, 255)',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
    shadowColor: 'rgb(225,255,255)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '90%',
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
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
