import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import MultiLineInput from './../../Components/MultiLineInput/MultiLineInput';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../Components/CustomFormInput/CustomFormInput.js';

const GiveProject = () => {
  const [description, setDescription] = useState('');
  const [ProjectName, setProjectName] = useState('');
  const [Language, setLanguage] = useState('');
  const [Department, setDepartment] = useState('');
  const [deadline, setDeadline] = useState('');

  const navigation = useNavigation();

  const OnHomePressed = () => {
    navigation.navigate('Home');
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View style={styles.container}>
      <CustomInput
        name="projectname"
        placeholder="Project Name"
        control={control}
        setValue={setProjectName}
        rules={{
          required: 'Project Name is required',
        }}
      />

      <CustomInput
        name="language"
        placeholder="Language"
        control={control}
        setValue={setLanguage}
        rules={{
          required: 'Language is required',
        }}
      />

      <CustomInput
        name="department"
        placeholder="Department"
        control={control}
        setValue={setDepartment}
        rules={{
          required: 'Department is required',
        }}
      />

      <CustomInput
        name="deadline"
        placeholder="Deadline"
        control={control}
        setValue={setDeadline}
        rules={{
          required: 'Deadline is required',
        }}
      />

      <MultiLineInput
        name="Description"
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
    paddingBottom: 40,
    paddingLeft: 10,
    padding: 10,
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
