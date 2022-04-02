import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../../src/Components/CustomInput/CustomInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ConfirmEmailScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const navigation = useNavigation();

  const ConfirmPressed = () => {
    navigation.navigate('ConfirmCode');
  };

  const OnSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Forgot Password</Text>

        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />

        <CustomButtons text="Confirm" onPress={handleSubmit(ConfirmPressed)} />

        <Text style={styles.text1}>
          Enter your email to reset your password.
        </Text>

        {/* <CustomButtons
          text="Resend Code"
          onPress={OnResendPress}
          type="SECONDARY"
        /> */}

        {/* <CustomButtons text="Back to Sign in"
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

export default ConfirmEmailScreen;
