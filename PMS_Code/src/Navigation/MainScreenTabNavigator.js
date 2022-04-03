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
      <View>
        <CustomButtons text="Sign in" onPress={onSignInPress} type="MAIN" />
      </View>
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 13},
          tabBarItemStyle: {height: 35, marginBottom: 4},
        }}>
        <TopTab.Screen name="About Us" component={AboutCompanyScreen} />
        <TopTab.Screen name="Our Employees" component={AboutEmployeeScreen} />
        <TopTab.Screen name="Recent Projects" component={RecentProjectScreen} />
      </TopTab.Navigator>
    </>
  );
};

export default MainScreenTabNavigator;
