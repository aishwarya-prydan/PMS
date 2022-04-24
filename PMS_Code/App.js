import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/Navigation/index';
import {LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {AuthContext, AuthProvider} from './src/Context/AuthContext.js';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <StatusBar backgroundColor="#000" />
      <Navigation />
    </AuthProvider>
  );
};

export default App;
