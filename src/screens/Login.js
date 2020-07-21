import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator} from '@react-navigation/stack';
import {TextButtonSolidSecondary} from '../components/common/Buttons';
import mountain from '../../images/mountain.jpg';

const LoginScreen = ({navigation}) => {
  navigation.setOptions({
    headerTitle: <Image style={styles.headerstyle} source={mountain} />,
  });
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {colors, dark} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.titlestyle}>MattApp</Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={24} color={colors.lightGrey} />
        <TextInput
          style={[styles.input, {color: colors.text}]}
          placeholder="Email Address"
          placeholderTextColor={colors.lightGrey}
          keyboardAppearance={dark ? 'dark' : 'light'}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={24} color={colors.lightGrey} />
        <TextInput
          style={[styles.input, {color: colors.text}]}
          placeholder="Password"
          placeholderTextColor={colors.lightGrey}
          keyboardAppearance={dark ? 'dark' : 'light'}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.passwordAction}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.passwordActionText}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={styles.fixThis}>
          <TextButtonSolidSecondary
            label="Login"
            onPress={() => {
              navigation.navigate('Home', {user: username});
            }}
            icon="arrow-right"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerstyle: {
    width: Dimensions.get('window').width - 50,
    height: 47,
    alignSelf: 'center',
  },
  container: {
    height: Dimensions.get('window').height - 75,
    padding: 15,
    borderTopLeftRadius: 7.5,
    borderTopRightRadius: 7.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  titlestyle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
    flex: 1,
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 10,
  },
  actionsContainer: {
    marginVertical: 10,
  },
  passwordAction: {
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  passwordActionText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgb(105,105,105)',
  },
  fixThis: {
    backgroundColor: 'rgb(205,205,205)',
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
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
