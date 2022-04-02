/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../Screens/OnboardingScreen/OnboardingScreen.js';
import SignInScreen from '../Screens/SignInScreen/SignInScreen.js';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen.js';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen.js';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen.js';
import ConfirmCodeScreen from '../Screens/ConfirmCodeScreen/ConfirmCodeScreen.js';
import NewPasswordScreen from '../Screens/NewPasswordScreen/NewPasswordScreen.js';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3B71F3',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConfirmEmail"
        component={ConfirmEmailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConfirmCode"
        component={ConfirmCodeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPasswordScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
