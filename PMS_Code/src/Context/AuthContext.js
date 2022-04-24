import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from '../config';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (name, email, password, successcallback) => {
    setIsLoading(true);
    console.log(name, email, password);
    axios
      .post(`${BASE_URL}/user/register/`, {
        name,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
        Alert.alert('Registration Success!');
        successcallback();
      })
      .catch(e => {
        console.log(`register error ${e}`);
        // Alert.alert('Invalid username and password');
        setIsLoading(false);
      });
  };

  const login = (email, password, successcallback, errorcallback) => {
    setIsLoading(true);
    console.log(email, password);
    axios
      .post(`${BASE_URL}/user/login/`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        Alert.alert('Signin Success!');
        successcallback();
      })
      .catch(e => {
        console.log(`login error ${e}`);
        Alert.alert('Invalid username or password');
        setIsLoading(false);
      });
  };

  const isLogout = async () => {
    try {
      await AsyncStorage.removeItem('userInfo');
      setUserInfo(null);
      Alert.alert('Logout Success!');
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        isLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
