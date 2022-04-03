import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {Picker} from '@react-native-picker/picker';

const GiveProject = () => {
  const [ProjectName, setProjectName] = useState('');
  const [Language, setLanguage] = useState('');
  const [description, setDescription] = useState('');
  const [Department, setDepartment] = useState('');
  const [deadline, setDeadline] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Please fill the Form</Text>
      <CustomInput placeholder="Project Name" setValue={setProjectName} />

      <CustomInput placeholder="Language" setValue={setLanguage} />

      <CustomInput placeholder="Department" setValue={setDepartment} />

      <CustomInput placeholder="Deadline" setValue={setDeadline} />

      <TextInput
        style={styles.input}
        setValue={setDescription}
        placeholder="Description"
      />

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

export default GiveProject;
