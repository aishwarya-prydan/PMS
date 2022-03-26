import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HireEmployee from '../Screens/HireEmployee/HireEmployeeScreen';
import DeveloperInfoScreen from '../Screens/DeveloperInfoScreen/DeveloperInfoScreen';

const TopTab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Hire" component={HireEmployee} />
      <TopTab.Screen name="Developerinfo" component={DeveloperInfoScreen} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
