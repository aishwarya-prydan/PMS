import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AboutCompanyScreen from '../Screens/AboutCompanyScreen/AboutCompanyScreen';
import AboutEmployeeScreen from '../Screens/AboutEmployeeScreen/AboutEmployeeScreen';
import RecentProjectScreen from '../Screens/RecentProjectScreen/RecentProjectScreen.js';
import CustomButtons from '../Components/CustomButtons/CustomButtons.js';
import {useNavigation} from '@react-navigation/native';
const TopTab = createMaterialTopTabNavigator();
const MainScreenTabNavigator = () => {
  const navigation = useNavigation();

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <>
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 13},
          tabBarItemStyle: {height: 60, marginBottom: 4},
          headerShown: true,
        }}>
        <TopTab.Screen
          name="About Us"
          component={AboutCompanyScreen}
          screenOptions={{
            headerShown: true,
            headerRight: () => (
              <Button
                onPress={() => alert('Clicked !!')}
                title="menu"
                color="#000"
              />
            ),
          }}
        />
        <TopTab.Screen name="Our Employees" component={AboutEmployeeScreen} />
        <TopTab.Screen name="Recent Projects" component={RecentProjectScreen} />
      </TopTab.Navigator>
    </>
  );
};

export default MainScreenTabNavigator;
