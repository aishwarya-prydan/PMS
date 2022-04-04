import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {Picker} from '@react-native-picker/picker';
import MultiLineInput from './../../Components/MultiLineInput/MultiLineInput';
import {useForm, Controller} from 'react-hook-form';

const ComplaintScreen = () => {
  const [Feedback, setFeedback] = useState('');
  const [selectedValue, setSelectedValue] = useState('WebSite');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

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

      <MultiLineInput
        name="Complaint"
        style={styles.input}
        setValue={setFeedback}
        placeholder="Complaint"
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 3,
            message: 'Password should be minimum 3 characters long',
          },
        }}
      />

      <CustomButtons text="Submit" onPress={handleSubmit()} />
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

export default ComplaintScreen;
