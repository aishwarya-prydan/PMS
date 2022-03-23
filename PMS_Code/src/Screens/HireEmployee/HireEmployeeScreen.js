import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import {Picker} from '@react-native-picker/picker';

const HireEmployee = () => {
  const [ProjectName, setProjectName] = useState('');
  const [Language, setLanguage] = useState('');
  const [Experience, setExerience] = useState('');
  const [ProjectDescription, setProjectDescription] = useState('');

  const [selectedValue, setSelectedValue] = useState('WebSite');

  return (
    <View style={styles.container}>
      <CustomInput
        style={styles.container}
        placeholder="ProjectName"
        setValue={setProjectName}
      />

      <CustomInput placeholder="Language" setValue={setLanguage} />

      <CustomInput placeholder="Experience" setValue={setExerience} />

      <Picker
        selectedValue={selectedValue}
        align="left"
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Home Pages Website" value="HomePagesWebSite" />
        <Picker.Item label="Magazine Website" value="MagazineWebSite" />
        <Picker.Item label="E-Commerce Website" value="E-CommerceWebSite" />
        <Picker.Item label="Blogs" value="Blogs" />
        <Picker.Item label="Portfolio Website" value="PortfolioWebSite" />
        <Picker.Item
          label="Landing Pages Website"
          value="LandingPagesWebSite"
        />
        <Picker.Item label="Social Media Website" value="SocialMediaWebSite" />
        <Picker.Item
          label="Directory & Contact Website"
          value="Directory&ContactWebSite"
        />
        <Picker.Item label="Mobile App" value="MobileApp" />
      </Picker>

      <CustomInput
        placeholder="Project Description"
        setValue={setProjectDescription}
      />

      <CustomButtons text="Submit" onPress={() => {}} />
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
});

export default HireEmployee;
