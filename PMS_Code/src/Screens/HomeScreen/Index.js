/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  const OnProjectInquiryPressed = () => {
    navigation.navigate('Project Inquiry');
  };

  const OnHireEmployeeInquiryPressed = () => {
    navigation.navigate('Employee Inquiry');
  };

  const OnProjectPressed = () => {
    navigation.navigate('GiveProject');
  };

  const OnEmployeePressed = () => {
    navigation.navigate('HireEmployee');
  };
  return (
    <View style={{ backgroundColor: '#f0f0f0' }}>
      <View style={styles.container}>
        <Text style={styles.texts}>Welcome to Prydan PMS</Text>
        <Text style={styles.texts1}>We are here to solve your problems</Text>
        <CustomButtons
          text="Inquiry about Give Project"
          type="FOUR"
          onPress={OnProjectInquiryPressed}
        />
        <CustomButtons
          text="Inquiry about Hire Employee"
          type="FOUR"
          onPress={OnHireEmployeeInquiryPressed}
        />

        <Text style={styles.main}>OR</Text>

        <CustomButtons
          text="Want to Give Project"
          type="FOUR"
          onPress={OnProjectPressed}
        />
        <CustomButtons
          text="Want to Hire Employee"
          type="FOUR"
          onPress={OnEmployeePressed}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 395,
    height: 190,
    backgroundColor: '#fff',
    paddingTop: 10,
    marginTop: 15,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    alignItems: 'center',
  },
  texts: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 40,
    marginBottom: 10,
  },
  texts1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
    marginBottom: 60,
  },
  main: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    color: '#000',
  },
});

export default Index;
