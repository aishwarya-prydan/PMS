import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../../src/Components/CustomInput/CustomInput.js';
import NumInput from '../../Components/NumInput/NumInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmCodeScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const ConfirmPressed = () => {
    navigation.navigate('NewPassword');
  };

  const OnSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const OnResendPress = () => {
    console.warn('Code');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>

        <NumInput
          placeholder="Enter your confirmation code"
          keyboardType="number-pad"
          name="code"
          control={control}
          rules={{
            required: 'Confirmation code is required',
            maxLength: {
              value: 4,
              message: 'code should be max 4 characters long',
            },
          }}
        />

        <CustomButtons text="Confirm" onPress={handleSubmit(ConfirmPressed)} />

        <Text>We have sent you a confirmation code.</Text>

        <CustomButtons
          text="Resend Code"
          onPress={OnResendPress}
          type="SECONDARY"
        />

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

  text2: {
    fontWeight: 'bold',
    marginTop: -40,
    marginLeft: -40,
    fontSize: 15,
  },

  link: {
    color: '#FDB075',
  },
});

export default ConfirmCodeScreen;
