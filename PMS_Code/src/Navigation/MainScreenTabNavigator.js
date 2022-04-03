import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AboutCompanyScreen from '../Screens/AboutCompanyScreen/AboutCompanyScreen';
import AboutEmployeeScreen from '../Screens/AboutEmployeeScreen/AboutEmployeeScreen';
import RecentProjectScreen from '../Screens/RecentProjectScreen/RecentProjectScreen.js';
const TopTab = createMaterialTopTabNavigator();
const MainScreenTabNavigator = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 13},
        tabBarItemStyle: {height: 35, marginBottom: 4},
      }}>
      <TopTab.Screen name="About Us" component={AboutCompanyScreen} />
      <TopTab.Screen name="Our Employees" component={AboutEmployeeScreen} />
      <TopTab.Screen name="Recent Projects" component={RecentProjectScreen} />
    </TopTab.Navigator>
  );
};

export default MainScreenTabNavigator;
