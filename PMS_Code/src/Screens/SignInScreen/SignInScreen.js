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

  const OnSignInPressed = data => {
    // console.log(data);
    navigation.navigate('Home');
  };
  const OnForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
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

        {/* <CustomInput name={username} placeholder="Username" control={control} />

        <CustomInput
          name={password}
          placeholder="Password"
          control={control}
          secureTextEntry={true}
        /> */}
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
          text="Forgot Password?"
          onPress={OnForgotPasswordPressed}
          type="TERTIARY"
        />
        {/* <CustomButtons text="Sign In" onPress={handleSubmit(OnSignInPressed)} /> */}
        <CustomButtons text="Sign In" onPress={OnSignInPressed} />

        <SocialSignInButtons />

        <CustomButtons
          text="Don't have an account? Create one"
          onPress={OnSignUpPress}
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

  logo: {
    width: 200,
    maxWidth: 500,
    maxHeight: 200,
  },
});

export default SignInScreen;
