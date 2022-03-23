import {View, Text} from 'react-native';
import React from 'react';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {useNavigation} from '@react-navigation/native';

const MainPaymentScreen = () => {
  const navigation = useNavigation();

  const onFullPaymentPressed = () => {
    navigation.navigate('FullPaymentScreen');
  };

  const onPartialPaymentPressed = () => {
    navigation.navigate('PartialPaymentScreen');
  };

  return (
    <View>
      <Text>MainPaymentScreen</Text>

      <CustomButtons text="Full Payment" onPress={onFullPaymentPressed} />
      <CustomButtons text="Partial Payment" onPress={onPartialPaymentPressed} />
    </View>
  );
};

export default MainPaymentScreen;
