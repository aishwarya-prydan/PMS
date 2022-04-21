/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../../assets/images/Logo.png';

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
    <View style={{backgroundColor: '#f0f0f0'}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginTop: 18}}>
          <Image
            source={Logo}
            style={{
              top: -50,
              right: 79,
              width: 141,
              height: 121,
              position: 'absolute',
            }}
          />
        </View>

        <Text style={styles.texts}>
          Welcome to Prydan PMS. Select an option get started below{' '}
        </Text>

        <CustomButtons
          text="Post Project"
          type="FOUR"
          onPress={OnProjectPressed}
          marginLeft="10"
        />
        <CustomButtons
          text="Hire Employee"
          type="FOUR"
          onPress={OnEmployeePressed}
          right="16"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 395,
    height: 225,
    backgroundColor: '#fff',
    paddingTop: 10,
    marginTop: 15,
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
    shadowColor: 'black',
    alignItems: 'center',
  },
  texts: {
    color: 'black',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 10,
    marginLeft: 74,
    // marginTop: -100,
    // marginBottom: 5,
    // marginBottom: 20,
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
