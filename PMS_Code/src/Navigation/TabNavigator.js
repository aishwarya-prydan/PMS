/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen/Index.js';
import ProfileScreen from './../Screens/ProfileScreen/ProfileScreen';
import MainProjectScreen from '../Screens/MainProjectScreen/MainProjectScreen.js';
import TopTabNavigator from '../Navigation/TopTabNavigator.js';
import {Icon} from 'react-native-elements';
import {color} from 'react-native-reanimated';
import HireEmployee from './../Screens/HireEmployee/HireEmployeeScreen';

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
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="font-awesome" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Hire"
        component={HireEmployee}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="handshake-o"
              type="font-awesome"
              color={color}
              size={23}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Project"
        component={TopTabNavigator}
        options={{
          // tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: '#fff'},
          tabBarIcon: ({color, size}) => (
            <Icon
              name="address-card"
              type="font-awesome"
              color={color}
              size={23}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cog" type="font-awesome" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
