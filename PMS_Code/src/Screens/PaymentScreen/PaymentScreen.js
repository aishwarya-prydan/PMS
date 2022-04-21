import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomFormInput from '../../Components/CustomFormInput/CustomFormInput.js';
import {Picker} from '@react-native-picker/picker';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import CustomButtons from '../../Components/CustomButtons/CustomButtons.js';
import NumInput from '../../Components/NumInput/NumInput.js';

const VALID = 'Cheque Book Only';

const PaymentScreen = () => {
  const [selectedValue, setSelectedValue] = useState('WebSite');
  const [PaymentDate, setPaymentDate] = useState('');
  const [PaymentMode, setPaymentMode] = useState('Cheque Book Only');
  const [ChequeNo, setChequeNo] = useState('');
  const [BankName, setBankName] = useState('');
  const [BankIFSCCode, setBankIFSCCode] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const navigation = useNavigation();

  const OnSubmitPressed = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Currently accepting payment through cheque only
      </Text>
      <Picker
        selectedValue={selectedValue}
        align="left"
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label=" Full Payment " value="Project" />
        <Picker.Item label="Partial Payment " value="Developer" />
      </Picker>

      {/* <CustomFormInput
        name="paymentmode"
        placeholder="Payment Mode"
        control={control}
        setValue={setPaymentMode}
        rules={{
          required: 'Payment mode is required',
          pattern: {
            value: VALID,
            message: 'Payment is accepted only using the cheque book',
          },
        }}
      /> */}

      <NumInput
        name="chequeno"
        placeholder="Cheque No"
        control={control}
        setValue={setChequeNo}
        rules={{
          required: 'Cheque No is required',
          minLength: {
            value: 6,
            message: 'Cheque No should be min 6 characters long',
          },
          maxLength: {
            value: 6,
            message: 'Cheque No should be max 6 characters long',
          },
        }}
      />

      <CustomFormInput
        name="bankname"
        placeholder="Bank Name"
        control={control}
        setValue={setBankName}
        rules={{
          required: 'Bank Name is required',
        }}
      />

      <CustomFormInput
        name="bankIFSCCode"
        placeholder="Bank IFSC Code"
        control={control}
        setValue={setBankIFSCCode}
        rules={{
          required: 'Bank IFSC Code is required',
          minLength: {
            value: 11,
            message: 'Bank IFSC Code should be min 11 characters long',
          },
          maxLength: {
            value: 11,
            message: 'Bank IFSC Code should be max 11 characters long',
          },
        }}
      />

      <CustomButtons text="Submit" onPress={handleSubmit(OnSubmitPressed)} />
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
    fontSize: 13,
    fontWeight: '500',
    marginTop: -20,
    marginBottom: 10,
    color: '#5c5a5a',
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

export default PaymentScreen;
