import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HireEmployee from '../Screens/HireEmployee/HireEmployeeScreen';
import DeveloperInfoScreen from '../Screens/DeveloperInfoScreen/DeveloperInfoScreen';
import UpdateSatusScreen from '../Screens/UpdateSatusScreen/UpdateSatusScreen';

const TopTab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 13},
        tabBarItemStyle: {height: 35, marginBottom: 4},
      }}>
      <TopTab.Screen name="Hire" component={HireEmployee} />
      <TopTab.Screen name="Developerinfo" component={DeveloperInfoScreen} />
      <TopTab.Screen name="UpdateStatus" component={UpdateSatusScreen} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
