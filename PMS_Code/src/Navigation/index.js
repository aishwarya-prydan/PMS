// /* eslint-disable prettier/prettier */
// /* eslint-disable no-trailing-spaces */
// /* eslint-disable no-unused-vars */
// /* eslint-disable prettier/prettier */

import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button} from 'react-native';
import {AuthContext} from '../Context/AuthContext.js';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../Screens/SignInScreen/SignInScreen.js';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen.js';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen.js';
import ConfirmCodeScreen from '../Screens/ConfirmCodeScreen/ConfirmCodeScreen.js';
import NewPasswordScreen from '../Screens/NewPasswordScreen/NewPasswordScreen.js';
import TermsOfUseScreen from '../Screens/TermsOfUseScreen/TermsOfUseScreen.js';
import OnboardingScreen from '../Screens/OnboardingScreen/OnboardingScreen.js';
import MainScreenTabNavigator from './MainScreenTabNavigator.js';
import PrivacyPolicyScreen from '../Screens/PrivacyPolicyScreen/PrivacyPolicyScreen.js';
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
import ProjectQuotation from '../Screens/ProjectQuatation/ProjectQuotation.js';
import HiredDeveloperScreen from '../Screens/HiredDeveloper/HiredDeveloperScreen.js';

const Stack = createNativeStackNavigator();

const Root = () => {
  const navigation = useNavigation();

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

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
            <Button onPress={onSignInPress} title="Sign in" color="#3B71F3" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);

  console.log('access_token', userInfo);

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
        {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : userInfo ? (
          <>
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
            <Stack.Screen
              name="UpdateStatusScreen"
              component={UpdateStatusScreen}
            />
            <Stack.Screen name="About Screen" component={AboutCompanyScreen} />
            <Stack.Screen
              name="Recent Project"
              component={RecentProjectScreen}
            />
            <Stack.Screen
              name="DevelopersScreen"
              component={DevelopersScreen}
            />
            <Stack.Screen
              name="Project Inquiry"
              component={GiveProjectInquiry}
            />
            <Stack.Screen
              name="Employee Inquiry"
              component={HireEmployeeInquiry}
            />
            <Stack.Screen name="Feedback Form" component={FeedbackScreen} />
            <Stack.Screen name="Complaint Form" component={ComplaintScreen} />
            <Stack.Screen name="Quotation" component={QuotationPrice} />
            <Stack.Screen
              name="DeveloperOpen"
              component={DeveloperOpenProfile}
            />
            <Stack.Screen
              name="Hired Developer Screen"
              component={HiredDeveloperScreen}
            />
            <Stack.Screen
              name="ProjectQuotation"
              component={ProjectQuotation}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Root"
              component={Root}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen
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
                ),
              }}
            /> */}
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
            <Stack.Screen
              name="Privacy Policy"
              component={PrivacyPolicyScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
