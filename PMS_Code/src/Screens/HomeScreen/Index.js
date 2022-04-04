/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {useNavigation} from '@react-navigation/native';

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
            source={{
              uri: 'https://source.unsplash.com/random',
            }}
            size={80}
          />
        </View>
        <Text style={styles.texts}>Welcome to Prydan PMS</Text>

        <CustomButtons
          text="Post Project"
          type="FOUR"
          onPress={OnProjectPressed}
        />
        <CustomButtons
          text="Hire Employee"
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
    fontSize: 17,
    marginTop: 5,
    marginBottom: 5,
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
