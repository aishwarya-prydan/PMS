import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../Components/CustomFormInput/CustomFormInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import {useForm, Controller} from 'react-hook-form';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../../../src/Context/AuthContext.js';

const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignInScreen = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const OnForgotPasswordPress = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Spinner visible={isLoading} />
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
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
            // pattern: {value: PASS_REGEX, message: 'Password is invalid'},
          }}
        />

        <CustomButtons
          text="Sign In"
          onPress={handleSubmit(data => {
            console.log(data);
            login(data.email, data.password, () => {
              navigation.navigate('Home');
            });
          })}
        />

        <CustomButtons
          style={styles.FP}
          text="Forgot Password?"
          onPress={OnForgotPasswordPress}
          type="FP"
        />

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
