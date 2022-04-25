/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, StyleSheet, View} from 'react-native';
import HomeScreen from '../Screens/HomeScreen/Index.js';
import ProfileScreen from './../Screens/ProfileScreen/ProfileScreen';
import TopTabNavigator from '../Navigation/TopTabNavigator.js';
import {Icon} from 'react-native-elements';
import DTopTabNavigator from './DTopTabNavigator.js';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../Context/AuthContext.js';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {userInfo, isLoading} = useContext(AuthContext);

  return (
    <>
      {/* <View style={styles.container}> */}
      {/* <Spinner visible={isLoading} /> */}
      {/* <Text style={styles.welcome}>Welcome {userInfo.email}</Text>
      </View> */}
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
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
            tabBarIcon: ({color}) => (
              <Icon name="home" type="font-awesome" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Hire"
          component={DTopTabNavigator}
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
            tabBarBadgeStyle: {backgroundColor: '#fff'},
            tabBarIcon: ({color, size}) => (
              <Icon
                name="briefcase"
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default TabNavigator;
