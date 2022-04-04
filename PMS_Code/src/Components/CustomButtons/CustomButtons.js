import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButtons = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 10,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {},
  // container_LEFT:{
  //     align: 'left',
  // },
  container_FOUR: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#3B71F3',
    width: '60%',
    borderRadius: 0,
  },

  text_PRIMARY: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    fontWeight: 'bold',
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: 'gray',
  },

  text_FOUR: {
    fontWeight: 'bold',
    color: '#3B71F3',
    fontSize: 15,
  },
  text_FP: {
    fontWeight: 'bold',
    color: '#3B71F3',
    fontSize: 15,
  },

  text_CO: {
    fontWeight: 'bold',
    color: '#3B71F3',
    fontSize: 15,
    marginLeft: 150,
  },
  text_BS: {
    fontWeight: 'bold',
    color: '#3B71F3',
    fontSize: 15,
    marginLeft: 70,
  },

  text_TU: {
    fontWeight: 'bold',
    color: '#FDB075',
    // fontSize: 15,
    marginLeft: -240,
    marginTop: -21,
  },

  text_PP: {
    fontWeight: 'bold',
    color: '#FDB075',
    // fontSize: 15,
    marginLeft: 6,
    marginTop: -39.5,
  },
  text_MAIN: {
    fontWeight: 'bold',
    color: '#3B71F3',
    fontSize: 18,
    marginLeft: 260,
  },
  text_HD: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
    // marginLeft: 260,
  },
});

export default CustomButtons;
