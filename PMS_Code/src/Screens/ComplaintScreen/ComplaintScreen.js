import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import MultiLineInput from '../../Components/MultiLineInput/MultiLineInput.js';

const ComplaintScreen = () => {
  // const [Feedback, setFeedback] = useState('');
  const [selectedValue, setSelectedValue] = useState('WebSite');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const navigation = useNavigation();

  const onHomePressed = () => {
    navigation.navigate('Home');
  };

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
        // setValue={setFeedback}
        placeholder="Complaint"
        control={control}
        rules={{required: 'Complaint is required'}}
      />

      {/* <CustomFormInput
        name="username"
        placeholder="Username"
        control={control}
        rules={{required: 'Username is required'}}
      /> */}

      <CustomButtons text="Submit" onPress={handleSubmit(onHomePressed)} />
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
