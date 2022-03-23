/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// eslint-disable-next-line no-unused-vars
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigation from './src/Navigation/index';
// import CustomDatePickerInput from './src/Components/CustomDatePicker/CustomDatePickerInput';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
      {/* <CustomDatePickerInput /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
