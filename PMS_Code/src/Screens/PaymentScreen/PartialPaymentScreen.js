import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomInput from '../../Components/CustomFormInput/CustomFormInput';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';

const PartialPaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PartialPaymentScreen</Text>
      <CustomInput placeholder="Payment Date" />
      <CustomInput placeholder="Payment Date" />
      <CustomInput placeholder="Payment Date" />
      <CustomInput placeholder="Payment Date" />
      <CustomInput placeholder="Payment Date" />
      <CustomButtons
        text="Proceed"
        onPress={() => {
          console.warn('Data Sent Successfully');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    topPadding: 40,
    bottomPadding: 20,
    padding: 10,
    alignItems: 'center',
  },
});

export default PartialPaymentScreen;
