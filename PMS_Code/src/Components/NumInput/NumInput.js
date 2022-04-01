/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, StyleSheet, setValue} from 'react-native';
// import {Controller} from 'react-hook-form';

const NumInput = ({control, name, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        // value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={'number-pad'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 10,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});

export default NumInput;
