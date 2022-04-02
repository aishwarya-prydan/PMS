/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
