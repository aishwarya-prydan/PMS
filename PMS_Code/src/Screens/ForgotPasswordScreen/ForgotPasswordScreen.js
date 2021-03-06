import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomFormInput from '../../Components/CustomFormInput/CustomFormInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const ConfirmPressed = () => {
    // console.warn('Confirm');
    navigation.navigate('SignIn');
  };

  const OnSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const OnResendPress = () => {
    console.warn('Code will be send to your register email');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>

        <CustomFormInput
          name="email"
          placeholder="Enter your Email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
          // secureTextEntry={true}
        />

        <CustomButtons text="Confirm" onPress={handleSubmit(ConfirmPressed)} />

        <Text style={styles.text1}>We have sent you a confirmation code.</Text>

        <CustomButtons
          text="Resend Code"
          onPress={OnResendPress}
          type="SECONDARY"
        />

        {/* <CustomButtons
              text="Back to Sign in"
              onPress={OnSignInPress}
              type="TERTIARY"
            /> */}

        <CustomButtons text="Sign in" onPress={OnSignInPress} type="BS" />
        <Text style={styles.text2}>Back to </Text>
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
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color: '#FDB075',
  },

  text1: {
    marginTop: 10,
    marginBottom: 10,
    //   marginLeft: -80,
    fontSize: 15,
  },

  text2: {
    fontWeight: 'bold',
    marginTop: -40,
    marginLeft: -40,
    fontSize: 15,
  },
});

export default ForgotPasswordScreen;
