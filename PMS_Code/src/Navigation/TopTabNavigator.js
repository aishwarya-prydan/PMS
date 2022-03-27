import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DeveloperInfoScreen from '../Screens/DeveloperInfoScreen/DeveloperInfoScreen';
import UpdateSatusScreen from '../Screens/UpdateSatusScreen/UpdateSatusScreen';
import GiveProjectScreen from '../Screens/GiveProject/GiveProjectScreen.js';
const TopTab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 13},
        tabBarItemStyle: {height: 35, marginBottom: 4},
      }}>
      <TopTab.Screen name="Projects" component={GiveProjectScreen} />
      <TopTab.Screen name="Developers" component={DeveloperInfoScreen} />
      <TopTab.Screen name="ProjectStatus" component={UpdateSatusScreen} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
