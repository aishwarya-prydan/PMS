/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutCompanyScreen from '../Screens/AboutCompanyScreen/AboutCompanyScreen.js';
import RecentProjectScreen from '../Screens/RecentProjectScreen/RecentProjectScreen.js';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen.js';
import EditProfileScreen from '../Screens/EditProfileScreen/EditProfileScreen.js';
import HireEmployeeScreen from '../Screens/HireEmployee/HireEmployeeScreen.js';
import GiveProjectScreen from '../Screens/GiveProject/GiveProjectScreen.js';
import UpdateStatusScreen from '../Screens/UpdateStatusScreen/UpdateStatusScreen.js';
import DevelopersScreen from '../Screens/DeveloperInfoScreen/DeveloperInfoScreen.js';
import DeveloperOpenProfile from '../Screens/DeveloperOpenProfile/DeveloperOpenProfile.js';
import MainProjectScreen from '../Screens/MainProjectScreen/MainProjectScreen';
import GiveProjectInquiry from '../Screens/GiveProjectInquiry/GiveProjectScreenInquiry.js';
import HireEmployeeInquiry from '../Screens/HireEmployeeInquiry/HireEmployeeInquiry.js';
import FeedbackScreen from '../Screens/FeedbackScreen/FeedbackScreen.js';
import ComplaintScreen from '../Screens/ComplaintScreen/ComplaintScreen.js';
import QuotationPrice from '../Screens/QuotationPriceScreen/QuotationPrice.js';
import TabNavigator from './TabNavigator';
import PaymentScreen from '../Screens/PaymentScreen/PaymentScreen.js';
import ProjectQuotation from '../Screens/ProjectQuatation4/ProjectQuotation.js';
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
      {/* <Stack.Screen
        name="DeveloperProfile"
        component={DeveloperOpenProfile}
        options={{headerShown: false}}
      /> */}

      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: true}}
      />
      <Stack.Screen name="Payment Screen" component={PaymentScreen} />
      <Stack.Screen name="HireEmployee" component={HireEmployeeScreen} />
      <Stack.Screen name="GiveProject" component={GiveProjectScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MainProject" component={MainProjectScreen} />
      <Stack.Screen name="UpdateStatusScreen" component={UpdateStatusScreen} />
      <Stack.Screen name="About Screen" component={AboutCompanyScreen} />
      <Stack.Screen name="Recent Project" component={RecentProjectScreen} />
      <Stack.Screen name="DevelopersScreen" component={DevelopersScreen} />

      <Stack.Screen name="Project Inquiry" component={GiveProjectInquiry} />
      <Stack.Screen name="Employee Inquiry" component={HireEmployeeInquiry} />
      <Stack.Screen name="Feedback Form" component={FeedbackScreen} />
      <Stack.Screen name="Complaint Form" component={ComplaintScreen} />
      <Stack.Screen name="Quotation" component={QuotationPrice} />
      <Stack.Screen name="DeveloperOpen" component={DeveloperOpenProfile} />
      <Stack.Screen name="ProjectQuotation" component={ProjectQuotation} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
