import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {StyleSheet, Text, View, StatusBar, Button} from 'react-native';
import {Header, PricingCard} from 'react-native-elements';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {color} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

export default function ProjectQuotation() {
  const navigation = useNavigation();

  const OnNextPressed = () => {
    navigation.navigate('Payment Screen');
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View style={styles.container}>
      <View style={styles.mainbox}>
        <PricingCard
          color="#3B71F3"
          title="Quotation for Project"
          price="Rs 40000"
          info={['Estimated Budget']}
          // button={{title: 'Hire'}}
          button={{
            title: 'Next',
            buttonStyle: styles.pricingButtonStyle,
            onPress: handleSubmit(OnNextPressed),
          }}
        />
      </View>
      <View>
        <CustomButtons text="Submit" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1200,
    backgroundColor: '#fff',
  },
  textinfo: {
    margin: 10,
    textAlign: 'center',
    fontSize: 15,
  },
  mainbox: {
    height: 1200,
  },
  pricingButtonStyle: {
    backgroundColor: '#ffff',
    width: -1,
  },
});
