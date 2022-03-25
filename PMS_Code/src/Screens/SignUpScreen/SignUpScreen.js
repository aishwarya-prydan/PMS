/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../../src/Components/CustomInput/CustomInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import SocialSignInButtons from '../../../src/Components/SocialSignInButtons/SocialSignInButtons.js';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './../../Navigation/AuthProvider';

const SignUpScreen = ({Navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setpasswordRepeat] = useState();
  const [mobileNumber, setmobileNumber] = useState();
  const navigation = useNavigation();

  // const {register} = useContext(AuthContext);

  const OnRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const OnSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const OnTermsOfUsePressed = () => {
    console.warn('Terms of use');
  };

  const OnPrivacyPressed = () => {
    console.warn('OnPrivacyPressed');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>

        <CustomInput
          placeholder="Username"
          //  value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Mobile Number"
          keyboardType="numeric"
          value={mobileNumber}
          setValue={setmobileNumber}
        />

        <CustomInput
          labelValue={email}
          placeholder="Email"
          onChangeText={userEmail => setEmail(userEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <CustomInput
          labelValue={password}
          placeholder="Password"
          onChangeText={userPassword => setPassword(userPassword)}
          secureTextEntry={true}
        />

        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setpasswordRepeat}
          secureTextEntry={true}
        />

        <CustomButtons
          // buttonTitle="Sign Up"
          text="Sign Up"
          onPress={OnRegisterPressed}
          // onPress={() => register(email, password)}
        />

        <Text style={styles.text}>
          By Registering, you confirm that you accept our{' '}
          <Text style={styles.link} OnPress={OnTermsOfUsePressed}>
            {' '}
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} OnPress={OnPrivacyPressed}>
            Privacy policy.
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButtons
          text="Have an account? Sign in"
          onPress={OnSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    marginTop: 20,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
