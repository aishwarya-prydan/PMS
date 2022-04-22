import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HiredDeveloperScreen from './../Screens/HiredDeveloper/HiredDeveloperScreen';
import HireEmployeeScreen from './../Screens/HireEmployee/HireEmployeeScreen';

const TopTab = createMaterialTopTabNavigator();
const DTopTabNavigator = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, fontWeight: '600'},
      }}>
      <TopTab.Screen name="Hire Developer" component={HireEmployeeScreen} />
      <TopTab.Screen name="Developers" component={HiredDeveloperScreen} />
    </TopTab.Navigator>
  );
};

export default DTopTabNavigator;
