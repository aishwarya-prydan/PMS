/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const Navigation = () => {
  const [auth, setAuth] = useState(true);
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      {/* <AppNavigator /> */}

      {auth ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
