/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../../src/Components/CustomInput/CustomInput.js';
import NumInput from '../../Components/NumInput/NumInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import SocialSignInButtons from '../../../src/Components/SocialSignInButtons/SocialSignInButtons.js';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './../../Navigation/AuthProvider';

const SignUpScreen = ({Navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConform, setpasswordConform] = useState();
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
    // console.warn('Terms of use');
    navigation.navigate('Terms Of Use');
  };

  const OnPrivacyPressed = () => {
    // console.warn('OnPrivacyPressed');
    navigation.navigate('Privacy Policy');
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

        <NumInput
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
          placeholder="Conform Password"
          value={passwordConform}
          setValue={setpasswordConform}
          secureTextEntry={true}
        />

        <CustomButtons
          // buttonTitle="Sign Up"
          text="Sign Up"
          onPress={OnRegisterPressed}
          // onPress={() => register(email, password)}
        />

        {/* <Text style={styles.text}>
          By Registering, you confirm that you accept our{' '}
          <Text style={styles.link} OnPress={OnTermsOfUsePressed}>
            {' '}
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} OnPress={OnPrivacyPressed}>
            Privacy policy.
          </Text>
        </Text> */}

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

        <CustomButtons text="Sign in" onPress={OnSignInPress} type="CO" />
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
