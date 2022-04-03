/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../Components/CustomFormInput/CustomFormInput.js';
import NumInput from '../../Components/NumInput/NumInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import SocialSignInButtons from '../../../src/Components/SocialSignInButtons/SocialSignInButtons.js';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPressed = data => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const OnTermsOfUsePressed = () => {
    navigation.navigate('Terms Of Use');
  };

  const OnPrivacyPressed = () => {
    navigation.navigate('Privacy Policy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />

        <NumInput
          name="mobile number"
          control={control}
          placeholder="Mobile Number"
          rules={{
            required: 'mobile number is required',
            minLength: {
              value: 10,
              message: 'mobile number should be min 10 characters long',
            },
            maxLength: {
              value: 10,
              message: 'mobilenumber should be max 10 characters long',
            },
          }}
        />

        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        />

        <CustomButtons
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text2}>
          By Registering, you confirm that you accept our
        </Text>
        <CustomButtons
          text="Terms of Use"
          onPress={OnTermsOfUsePressed}
          type="TU"
        />
        <Text style={styles.text3}>and </Text>
        <CustomButtons
          text="Privacy policy."
          onPress={OnPrivacyPressed}
          type="PP"
        />

        <SocialSignInButtons />

        <CustomButtons text="Sign in" onPress={onSignInPress} type="CO" />
        <Text style={styles.text1}>Do you have an account? </Text>
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

  text1: {
    marginTop: -40,
    marginLeft: -80,
    fontSize: 15,
  },

  text2: {
    // fontWeight: 'bold',
    marginTop: 10,
    marginLeft: -30,
    fontSize: 14,
    // marginBottom: 10,
  },

  text3: {
    // fontWeight: 'bold',
    marginTop: -40.8,
    marginLeft: -115,
    fontSize: 14,
    // marginBottom: 10,
  },
});

export default SignUpScreen;
