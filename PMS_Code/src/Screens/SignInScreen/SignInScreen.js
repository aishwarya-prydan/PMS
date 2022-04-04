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
import CustomFormInput from '../../Components/CustomFormInput/CustomFormInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import SocialSignInButtons from '../../../src/Components/SocialSignInButtons/SocialSignInButtons.js';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = data => {
    console.log(data);
    // validate user
    navigation.navigate('Home');
  };

  const OnForgotPasswordPress = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomFormInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomFormInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButtons text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        <CustomButtons
          style={styles.FP}
          text="Forgot Password?"
          // onPress={() => navigation.navigate(OnForgotPasswordPressed)}
          onPress={OnForgotPasswordPress}
          type="FP"
        />

        <SocialSignInButtons />

        <CustomButtons text="Create one" onPress={onSignUpPress} type="CO" />
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
    // marginLeft: -2,
    alignSelf: 'center',
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
