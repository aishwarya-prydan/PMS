import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainProjectScreen from '../Screens/MainProjectScreen/MainProjectScreen.js';
import DeveloperInfoScreen from '../Screens/DeveloperInfoScreen/DeveloperInfoScreen';
import UpdateSatusScreen from '../Screens/UpdateStatusScreen/UpdateStatusScreen';
import GiveProjectScreen from '../Screens/GiveProject/GiveProjectScreen.js';

const TopTab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  
  return (
    <TopTab.Navigator
      screenOptions={{
        // tabBarLabelStyle: {fontSize: 13},
        // tabBarItemStyle: {height: 45, marginBottom: 2, alignSelf: 'center'},
        tabBarLabelStyle: {fontSize: 13},
        tabBarItemStyle: {
          height: 60,
          marginBottom: 4,
          width: 100,
          alignSelf: 'center',
        },
        headerShown: true,
      }}>
      <TopTab.Screen name="Projects Details" component={MainProjectScreen} />
      <TopTab.Screen name="Add Project" component={GiveProjectScreen} />
      <TopTab.Screen
        name="Developers Details"
        component={DeveloperInfoScreen}
      />
      <TopTab.Screen name="Project Status" component={UpdateSatusScreen} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
