/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../Components/CustomFormInput/CustomFormInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../../Context/AuthContext.js';

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUpScreen = ({navigation}) => {
  const {control, handleSubmit, watch} = useForm();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const {isLoading, register} = useContext(AuthContext);

  const pwd = watch('password');
  // const navigation = useNavigation();

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
      <Spinner visible={isLoading} />
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="name"
          control={control}
          value={name}
          onChangeText={text => setName(text)}
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

        <CustomInput
          name="email"
          control={control}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          name="password"
          control={control}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
          }}
        />

        <CustomButtons
          text="Register"
          onPress={handleSubmit(data => {
            console.log(data);
            register(data.name, data.email, data.password, () => {
              // navigation.navigate('SignIn');
            });
          })}
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
    marginTop: 10,
    marginLeft: -30,
    fontSize: 14,
  },

  text3: {
    marginTop: -40.8,
    marginLeft: -115,
    fontSize: 14,
  },
});

export default SignUpScreen;
