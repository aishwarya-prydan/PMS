/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen/Index.js';
import ProfileScreen from './../Screens/ProfileScreen/ProfileScreen';
import HireEmployee from '../Screens/HireEmployee/HireEmployeeScreen';
import {Icon} from 'react-native-elements';
import {color} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // header
        rShown: false,
        tabBarStyle: {backgroundColor: '#3B71F3'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#f7ffbf',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HireEmp"
        component={HireEmployee}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: '#fff'},
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="bars" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
