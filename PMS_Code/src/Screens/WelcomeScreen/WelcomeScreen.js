import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {UseEffect, useState} from 'react';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import {CheckBox} from 'react-native-elements';

const WelcomeScreen = ({navigation}) => {
  const [Customer, setCustomer] = useState(false);
  const [Employee, setEmployee] = useState(false);
  const [Select, setSelect] = useState('');

  const SelectCustomer = () => {
    setCustomer(true);
    setEmployee(false);
  };

  const SelectEmployee = () => {
    setEmployee(true);
    setCustomer(false);
  };

  // if (setCustomer == false) {
  //   OnContinuePress(false);
  // }

  const OnContinuePress = () => {
    // navigation.navigate('SignIn');
    // if (setCustomer.checked || setEmployee.checked != true) {
    //   // navigation.navigate('SignIn');
    //   Alert.alert('Please select the write option');
    // } else {
    //   // console.log('Please select the write option');
    //   // Alert.alert('Please select the write option');
    //   // navigation.navigate('SignIn');
    // }

    if (SelectCustomer || SelectEmployee) {
      // Alert.alert('you have selected a customer');
      navigation.navigate('SignIn');
    } else {
      Alert.alert('Please select the write option');
    }

    // if (SelectEmployee) {
    //   Alert.alert('you have selected a Employee');
    // }
  };

  return (
    <View>
      <Text style={styles.text1}>Welcome</Text>
      <Text style={styles.text2}>To</Text>
      <Text style={styles.text3}>Prydan PMS</Text>
      <Text style={styles.text4}>USER TYPE SELECTION</Text>
      <View>
        <Text style={styles.btext}>Please Login or Register</Text>
        <Text style={styles.btext1}>as</Text>
      </View>
      <View style={styles.main}>
        <CheckBox
          style={styles.rbutton}
          title="Customer"
          center
          checked={Customer}
          checkedIcon="dot-circle-o"
          uncheckedIcon={'circle-o'}
          onPress={SelectCustomer}
        />
        <CheckBox
          style={styles.rbutton}
          title="Employee"
          center
          checked={Employee}
          checkedIcon="dot-circle-o"
          uncheckedIcon={'circle-o'}
          onPress={SelectEmployee}
        />
      </View>
      <View>
        <Text style={styles.text5}>Select one from the given options</Text>
      </View>
      <View style={styles.cbutton1}>
        <CustomButtons text="Continue" onPress={OnContinuePress} />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  rbutton: {},

  text1: {
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 50,
    textAlign: 'center',
    color: '#20b2aa',
    letterSpacing: 2,
    justifyContent: 'space-between',
  },

  text2: {
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 10,
    textAlign: 'center',
    color: '#20b2aa',
    letterSpacing: 2,
  },

  text3: {
    fontWeight: 'bold',
    fontSize: 42,
    marginTop: 2,
    textAlign: 'center',
    color: '#20b2aa',
    letterSpacing: 2,
  },

  text4: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    textAlign: 'center',
    color: '#121212',
    letterSpacing: 5,
  },

  text5: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center',
    color: '#121212',
    letterSpacing: 1,
  },

  cbutton1: {
    width: '40%',
    marginVertical: 5,
    borderRadius: 10,
    padding: 0,
    borderRadius: 100,
    marginLeft: 120,
    marginTop: 20,
  },

  btext: {
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ff8c00',
  },

  btext1: {
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ff8c00',
  },
});
