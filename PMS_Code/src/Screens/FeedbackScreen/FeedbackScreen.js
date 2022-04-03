import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {Picker} from '@react-native-picker/picker';
import MultiLineInput from './../../Components/MultiLineInput/MultiLineInput';

const FeedbackScreen = () => {
  const [Feedback, setFeedback] = useState('');
  const [selectedValue, setSelectedValue] = useState('WebSite');

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Please fill the Form</Text>
      <Picker
        selectedValue={selectedValue}
        align="left"
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label=" About Project" value="Project" />
        <Picker.Item label="About Developer" value="Developer" />
      </Picker>

      <MultiLineInput setValue={setFeedback} placeholder="Feedback" />

      <CustomButtons
        text="Submit"
        onPress={() => {
          Alert.alert('Form submission completed');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 10,
    padding: 10,
  },

  picker: {
    borderWidth: 1,
    height: 50,
    width: 390,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -20,
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: '10%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export default FeedbackScreen;
