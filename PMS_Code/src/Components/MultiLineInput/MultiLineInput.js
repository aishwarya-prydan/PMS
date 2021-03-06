/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, StyleSheet, setValue} from 'react-native';
import {Controller} from 'react-hook-form';

const MultiLineInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  value,
  setValue,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              OnChangeText={setValue}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
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

export default MultiLineInput;
