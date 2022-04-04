import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomFormInput from '../../Components/CustomFormInput/CustomFormInput';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import MultiLineInput from './../../Components/MultiLineInput/MultiLineInput';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

const GiveProject = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const OnHomePressed = () => {
    navigation.navigate('Home');
  };

  const [ProjectName, setProjectName] = useState('');
  const [Language, setLanguage] = useState('');
  const [description, setDescription] = useState('');
  const [Department, setDepartment] = useState('');
  const [deadline, setDeadline] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Please fill the Form</Text>
      <CustomFormInput
        placeholder="Project Name"
        control={control}
        setValue={setProjectName}
        rules={{
          required: 'Project Name is required',
        }}
      />

      <CustomFormInput
        placeholder="Language"
        control={control}
        setValue={setLanguage}
        rules={{
          required: 'Language is required',
        }}
      />

      <CustomFormInput
        placeholder="Department"
        control={control}
        setValue={setDepartment}
        rules={{
          required: 'Department is required',
        }}
      />

      <CustomFormInput
        placeholder="Deadline"
        control={control}
        setValue={setDeadline}
        rules={{
          required: 'Deadline is required',
        }}
      />

      <MultiLineInput
        setValue={setDescription}
        control={control}
        placeholder="Description"
        rules={{
          required: 'Description is required',
          minLength: {
            value: 50,
            message: 'Description should be at least 50 characters long',
          },
        }}
      />

      <CustomButtons text="Submit" onPress={handleSubmit(OnHomePressed)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },

  picker: {
    height: 50,
    width: 390,
    backgroundColor: 'white',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -20,
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
});

export default GiveProject;
