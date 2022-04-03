/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {useNavigation} from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  const OnProjectPressed = () => {
    navigation.navigate('GiveProject');
  };
  const OnEmployeePressed = () => {
    navigation.navigate('HireEmployee');
  };
  return (
    <View style={{backgroundColor: '#f0f0f0'}}>
      <View style={styles.container}>
        <Text style={styles.texts}>
          Welcome to PMS. Select an option below to get started
        </Text>
        <CustomButtons
          text="Post a Project"
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
    fontSize: 15,
    marginBottom: 5,
  },
});

export default Index;
