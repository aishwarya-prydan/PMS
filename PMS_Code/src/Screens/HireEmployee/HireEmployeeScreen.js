import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {Picker} from '@react-native-picker/picker';
import MultiLineInput from '../../Components/MultiLineInput/MultiLineInput';

const HireEmployee = () => {
  const [LanguageName, setLanguageName] = useState('');
  const [Location, setLocation] = useState('');
  const [Experience, setExperience] = useState('');
  const [description, setDescription] = useState('');

  return (
    // <View style={styles.container}>
    //   <CustomInput
    //     style={styles.container}
    //     placeholder="ProjectName"
    //     setValue={setProjectName}
    //   />

    //   <CustomInput placeholder="Language" setValue={setLanguage} />

    //   <CustomInput placeholder="Experience" setValue={setExerience} />

    //   <CustomInput placeholder="Location" setValue={setLocation} />

    //   <Picker
    //     selectedValue={selectedValue}
    //     align="left"
    //     style={styles.picker}
    //     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
    //     <Picker.Item label="Home Pages Website" value="HomePagesWebSite" />
    //     <Picker.Item label="Magazine Website" value="MagazineWebSite" />
    //     <Picker.Item label="E-Commerce Website" value="E-CommerceWebSite" />
    //     <Picker.Item label="Blogs" value="Blogs" />
    //     <Picker.Item label="Portfolio Website" value="PortfolioWebSite" />
    //     <Picker.Item
    //       label="Landing Pages Website"
    //       value="LandingPagesWebSite"
    //     />
    //     <Picker.Item label="Social Media Website" value="SocialMediaWebSite" />
    //     <Picker.Item
    //       label="Directory & Contact Website"
    //       value="Directory&ContactWebSite"
    //     />
    //     <Picker.Item label="Mobile App" value="MobileApp" />
    //   </Picker>

    //   <CustomInput
    //     placeholder="Project Description"
    //     setValue={setProjectDescription}
    //   />

    //   <CustomButtons text="Submit" onPress={() => { }} />
    // </View>

    <View style={styles.container}>
      <Text style={styles.text1}>Please fill the Form</Text>
      <CustomInput placeholder="Language Name" setValue={setLanguageName} />

      <CustomInput placeholder="Location" setValue={setLocation} />

      <CustomInput placeholder="Experience" setValue={setExperience} />

      <MultiLineInput setValue={setDescription} placeholder="Description" />

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
});

export default HireEmployee;
