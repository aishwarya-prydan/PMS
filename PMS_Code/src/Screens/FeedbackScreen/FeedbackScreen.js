import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {Picker} from '@react-native-picker/picker';
import MultiLineInput from './../../Components/MultiLineInput/MultiLineInput';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

const FeedbackScreen = () => {
  const [Feedback, setFeedback] = useState('');
  const [selectedValue, setSelectedValue] = useState('WebSite');

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
      <Picker
        selectedValue={selectedValue}
        align="left"
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label=" About Project" value="Project" />
        <Picker.Item label="About Developer" value="Developer" />
      </Picker>

      <MultiLineInput
        name="Feedback"
        setValue={setFeedback}
        placeholder="Feedback"
        control={control}
        rules={{required: 'Feedback is required'}}
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

  picker: {
    borderWidth: 1,
    height: 50,
    width: 390,
    backgroundColor: 'white',
    borderRadius: 10,
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
