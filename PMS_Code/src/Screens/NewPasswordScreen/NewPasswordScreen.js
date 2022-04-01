import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../../src/Components/CustomInput/CustomInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [Code, SetCode] = useState('');
  const [NewPassword, SetNewPassword] = useState('');
  const [CNewPassword, SetCNewPassword] = useState('');
  const navigation = useNavigation();

  const OnSubmitPressed = () => {
    navigation.navigate('SignIn');
  };

  const OnForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };

  const OnResendPress = () => {
    console.warn('Code');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Set New Password</Text>

        <CustomInput
          placeholder="New Password"
          value={NewPassword}
          setValue={SetNewPassword}
          secureTextEntry={true}
        />

        <CustomInput
          placeholder="Confirm New Password"
          value={CNewPassword}
          setValue={SetCNewPassword}
          secureTextEntry={true}
        />

        <CustomButtons text="Submit" onPress={OnSubmitPressed} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },
});

export default NewPasswordScreen;
