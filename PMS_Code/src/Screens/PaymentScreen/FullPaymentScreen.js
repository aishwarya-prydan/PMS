/* eslint-disable prettier/prettier */
import { SafeAreaView, View, Text } from 'react-native';
import React from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import CustomDatePickerInput from '../../Components/CustomDatePicker/CustomDatePickerInput';

const FullPaymentScreen = () => {
  return (
    <SafeAreaView>
      <Text>FullPaymentScreen</Text>
      <CustomDatePickerInput />
      <CustomInput placeholder="Payment Date" />
      <CustomInput placeholder="Payment Date" />
      <CustomInput placeholder="Payment Date" />
      <CustomInput placeholder="Payment Date" />
      <CustomDatePickerInput />
      <CustomButtons
        text="Proceed"
        onPress={() => {
          console.warn('Data Sent Successfully');
        }}
      />
    </SafeAreaView>
  );
};

export default FullPaymentScreen;
