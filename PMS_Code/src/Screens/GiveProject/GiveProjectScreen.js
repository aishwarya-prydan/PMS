import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../Components/CustomFormInput/CustomFormInput';
import CustomButtons from '../../Components/CustomButtons/CustomButtons';
import { Picker } from '@react-native-picker/picker';

const GiveProject = () => {
  const [ProjectName, setProjectName] = useState('');
  const [Language, setLanguage] = useState('');
  const [ProjectDescription, setProjectDescription] = useState('');
  const [Department, setDepartment] = useState('');

  const [selectedValue, setSelectedValue] = useState('WebSite');

  return (
    <View style={styles.container}>
      <CustomInput placeholder="ProjectName" setValue={setProjectName} />

      <CustomInput placeholder="Language" setValue={setLanguage} />

      <CustomInput placeholder="Department" setValue={setDepartment} />

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

      {/* <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="WebSite" value="website" />
              <Picker.Item label="Mobile App" value="mobileapp" />
            </Picker> */}

      <CustomInput
        placeholder="Project Description"
        setValue={setProjectDescription}
      />

      <CustomButtons text="Submit" onPress={() => { }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    // alignItems: "center"
  },

  picker: {
    height: 50,
    width: 390,
    backgroundColor: 'white',
    // alignItems: 'right',
  },

  // picker: {
  //   height: 50,
  //   width: 200,
  // },
});

export default GiveProject;

// const styles = StyleSheet.create({
//     picker: {
//         width: 300,
//         height: 45,
//         borderWidth: 2,
//     },
// });

// export default GiveProject;
