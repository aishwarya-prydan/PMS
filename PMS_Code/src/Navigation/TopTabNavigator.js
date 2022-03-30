import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MainProjectScreen from '../Screens/MainProjectScreen/MainProjectScreen.js';
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
      <TopTab.Screen name="Projects" component={MainProjectScreen} />
      <TopTab.Screen name="Add" component={GiveProjectScreen} />
      <TopTab.Screen name="Developers" component={DeveloperInfoScreen} />
      <TopTab.Screen name="Project Status" component={UpdateSatusScreen} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
