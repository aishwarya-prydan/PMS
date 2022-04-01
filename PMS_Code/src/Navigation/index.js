/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AboutCompanyScreen from '../Screens/AboutCompanyScreen/AboutCompanyScreen.js';
import RecentProjectScreen from '../Screens/RecentProjectScreen/RecentProjectScreen.js';
import DevelopersScreen from '../Screens/DevelopersScreen/DevelopersScreen.js';

import OnboardingScreen from '../Screens/OnboardingScreen/OnboardingScreen.js';

import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen.js';
import SignInScreen from '../Screens/SignInScreen/SignInScreen.js';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen.js';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen.js';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen.js';
import ConfirmCodeScreen from '../Screens/ConfirmCodeScreen/ConfirmCodeScreen.js';
import NewPasswordScreen from '../Screens/NewPasswordScreen/NewPasswordScreen.js';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen.js';
import EditProfileScreen from '../Screens/EditProfileScreen/EditProfileScreen.js';
import HireEmployeeScreen from '../Screens/HireEmployee/HireEmployeeScreen.js';
import GiveProjectScreen from '../Screens/GiveProject/GiveProjectScreen.js';
import UpdateStatusScreen from '../Screens/UpdateStatusScreen/UpdateStatusScreen.js';
import MainPaymentScreen from '../Screens/PaymentScreen/MainPaymentScreen.js';
import FullPaymentScreen from '../Screens/PaymentScreen/FullPaymentScreen.js';
import PartialPaymentScreen from '../Screens/PaymentScreen/PartialPaymentScreen.js';
import CustomDatePicker from '../Components/CustomDatePicker/CustomDatePickerInput.js';
import TopTabNavigator from '../Navigation/TopTabNavigator.js';
import TermsOfUseScreen from '../Screens/TermsOfUseScreen/TermsOfUseScreen.js';
import PrivacyPolicyScreen from '../Screens/PrivacyPolicyScreen/PrivacyPolicyScreen.js';
import MainProjectScreen from '../Screens/MainProjectScreen/MainProjectScreen';

// import HomeScreen from '../Screens/HomeScreen/Index.js';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import { ScreenStack } from 'react-native-screens';
import Header from './../Components/Header/Header';
import UpdateSatusScreen from '../Screens/UpdateStatusScreen/UpdateStatusScreen.js';
import { Title } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const ProfileStack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
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
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} />
         */}
        {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
        {/* <Stack.Screen name="DatePicker" component={CustomDatePickerInput} /> */}
        {/* <Stack.Screen name="FullPaymentScreen" component={FullPaymentScreen} />
        <Stack.Screen name="MainPaymentScreen" component={MainPaymentScreen} /> */}
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

        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: true}}
        />
        <Stack.Screen name="HireEmployee" component={HireEmployeeScreen} />
        <Stack.Screen name="GiveProject" component={GiveProjectScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FullPaymentScreen" component={FullPaymentScreen} />
        <Stack.Screen name="MainPaymentScreen" component={MainPaymentScreen} />
        <Stack.Screen name="MainProject" component={MainProjectScreen} />
        <Stack.Screen name="Terms Of Use" component={TermsOfUseScreen} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
        <Stack.Screen
          name="UpdateStatusScreen"
          component={UpdateStatusScreen}
        />
        <Stack.Screen name="About Screen" component={AboutCompanyScreen} />
        <Stack.Screen name="Recent Project" component={RecentProjectScreen} />
        <Stack.Screen name="Developers Screen" component={DevelopersScreen} />
        <Stack.Screen
          name="PartialPaymentScreen"
          component={PartialPaymentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleContainerStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStackScreen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        headerLeft: () => (
          <Icon.Button
            name="android-menu"
            size={25}
            backgroundColor="#1f65ff"
            color="#000"
            onPress={() => navigation.OpenDrawer()}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);

export default Navigation;
