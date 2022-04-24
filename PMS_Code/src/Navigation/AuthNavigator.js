/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from '../Screens/OnboardingScreen/OnboardingScreen.js';
import MainScreenTabNavigator from './MainScreenTabNavigator.js';
import SignInScreen from '../Screens/SignInScreen/SignInScreen.js';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen.js';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen.js';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen.js';
import ConfirmCodeScreen from '../Screens/ConfirmCodeScreen/ConfirmCodeScreen.js';
import NewPasswordScreen from '../Screens/NewPasswordScreen/NewPasswordScreen.js';
import TermsOfUseScreen from '../Screens/TermsOfUseScreen/TermsOfUseScreen.js';
import PrivacyPolicyScreen from '../Screens/PrivacyPolicyScreen/PrivacyPolicyScreen.js';
import AboutCompanyScreen from '../Screens/AboutCompanyScreen/AboutCompanyScreen';
import AboutEmployeeScreen from './../Screens/AboutEmployeeScreen/AboutEmployeeScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const navigation = useNavigation();
  // const onSignInPress = () => {
  //   navigation.navigate('SignIn');
  // };

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
        name="PMS"
        component={MainScreenTabNavigator}
        options={{
          headerRight: () => (
            <Button
              onPress={navigation.navigate('SignIn')}
              title="Sign in"
              color="#3B71F3"
            />
            // <CustomButtons title="Sign in" onPress={onSignInPress} type="CO" />
          ),
        }}
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
      <Stack.Screen name="Terms Of Use" component={TermsOfUseScreen} />
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="AboutCompany" component={AboutCompanyScreen} />
      <Stack.Screen name="AboutEmployee" component={AboutEmployeeScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
