/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
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
import axios from 'axios';


const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;

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

  const fetchApi = async () => {
    try {
      // const api = 'http://192.168.113.17/api/tblUser/';
      const api = 'https://f33b-103-1-100-53.ngrok.io/api/tblUser/';
      // const api = 'https://jsonplaceholder.typicode.com/todos/10';
      // const api = 'http://localhost:5000/SignUpapi/1/';
      const res = await axios.get(api, {
        headers: {
          authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ5MDc2NTY3LCJpYXQiOjE2NDkwNzQ3NjcsImp0aSI6IjdhMzAxODRkMDM5YjQ2ZWU4YzZjZWMyMjg4YWQ5Y2JlIiwidXNlcl9pZCI6MX0.sJw_vBx6aShHWocmMGFkmnhbuEcEk0_mYV1HBTqv-fk`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

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
            // minLength: {
            //   value: 6,
            //   message: 'Password should be minimum 6 characters long',
            // },
            pattern: {
              value: PASS_REGEX,
              message:
                'Password must be at least 6 - 15 characters long \nOne character must be Uppercase \nOne character must be lowercase \nOne character must be Special Symbol \nOne character must be a Number',
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
