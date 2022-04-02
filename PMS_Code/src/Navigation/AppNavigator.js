/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutCompanyScreen from '../Screens/AboutCompanyScreen/AboutCompanyScreen.js';
import RecentProjectScreen from '../Screens/RecentProjectScreen/RecentProjectScreen.js';
import DevelopersScreen from '../Screens/DevelopersScreen/DevelopersScreen.js';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen.js';
import EditProfileScreen from '../Screens/EditProfileScreen/EditProfileScreen.js';
import HireEmployeeScreen from '../Screens/HireEmployee/HireEmployeeScreen.js';
import GiveProjectScreen from '../Screens/GiveProject/GiveProjectScreen.js';
import UpdateStatusScreen from '../Screens/UpdateStatusScreen/UpdateStatusScreen.js';
import MainPaymentScreen from '../Screens/PaymentScreen/MainPaymentScreen.js';
import FullPaymentScreen from '../Screens/PaymentScreen/FullPaymentScreen.js';
import PartialPaymentScreen from '../Screens/PaymentScreen/PartialPaymentScreen.js';
import TermsOfUseScreen from '../Screens/TermsOfUseScreen/TermsOfUseScreen.js';
import PrivacyPolicyScreen from '../Screens/PrivacyPolicyScreen/PrivacyPolicyScreen.js';
import MainProjectScreen from '../Screens/MainProjectScreen/MainProjectScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
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
      <Stack.Screen name="UpdateStatusScreen" component={UpdateStatusScreen} />
      <Stack.Screen name="About Screen" component={AboutCompanyScreen} />
      <Stack.Screen name="Recent Project" component={RecentProjectScreen} />
      <Stack.Screen name="Developers Screen" component={DevelopersScreen} />
      <Stack.Screen
        name="PartialPaymentScreen"
        component={PartialPaymentScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
