/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';

import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../../src/Components/CustomInput/CustomInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import SocialSignInButtons from '../../../src/Components/SocialSignInButtons/SocialSignInButtons.js';

import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [Customer, setCustomer] = useState(false);
  const [Employee, setEmployee] = useState(false);
  const [Select, setSelect] = useState('');

  const OnSignInPressed = data => {
    // console.log(data);
    navigation.navigate('Home');
  };
  const OnForgotPasswordPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const OnSignInFacebook = () => {
    console.warn('Facebook');
  };

  const OnSignGoogle = () => {
    console.warn('Google');
  };

  const OnSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Username"
          // value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          // value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButtons
          style={styles.FP}
          text="Forgot Password?"
          onPress={OnForgotPasswordPressed}
          // type="TERTIARY"
          type="FP"
        />

        {/* <CustomButtons text="Sign In" onPress={handleSubmit(OnSignInPressed)} /> */}
        <CustomButtons text="Sign In" onPress={OnSignInPressed} />

        <SocialSignInButtons />

        <CustomButtons text="Create one" onPress={OnSignUpPress} type="CO" />
        <Text style={styles.text1}>Don't have an account? </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: 370,
    maxWidth: 470,
    maxHeight: 380,
  },

  text1: {
    marginTop: -40,
    marginLeft: -100,
    fontSize: 15,
  },

  link: {
    color: '#3B71F3',
  },
});

export default SignInScreen;
