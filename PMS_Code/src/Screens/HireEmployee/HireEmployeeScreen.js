import {View, Text, StyleSheet, TextInput, Alert, Button} from 'react-native';
import React, {useState} from 'react';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import MultiLineInput from './../../Components/MultiLineInput/MultiLineInput';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../Components/CustomFormInput/CustomFormInput.js';
// import DatePickerAnd from '../../Components/DatePickerAnd/DatePickerAnd';
import DatePicker from 'react-native-date-picker';

const HireEmployee = () => {
  const [LanguageName, setLanguageName] = useState('');
  const [Location, setLocation] = useState('');
  const [Experience, setExperience] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  const OnHomePressed = () => {
    navigation.navigate('Quotation');
  };
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Please fill the Form</Text>

      <CustomInput
        name="languagename"
        placeholder="Language Name"
        control={control}
        setValue={setLanguageName}
        rules={{
          required: 'Language Name is required',
        }}
      />

      <CustomInput
        name="location"
        placeholder="Location"
        control={control}
        setValue={setLocation}
        rules={{
          required: 'Location is required',
        }}
      />
      {/* <Button title="Select Date" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      /> */}

      <CustomInput
        name="experience"
        placeholder="Experience"
        control={control}
        setValue={setExperience}
        rules={{
          required: 'Experience is required',
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

export default HireEmployee;
