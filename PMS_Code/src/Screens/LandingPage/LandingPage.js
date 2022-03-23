/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { View, Text , Image, Alert, StyleSheet, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import Logo from '../../../assets/images/Logo.png';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';

const Landingpage = () => {

 const {height} = useWindowDimensions();
 const OnSignIn = () => {
        console.warn("SignIn and SignUp page will be open");
    };


  return (
    <View style={styles.root}>
    
    

    <TouchableOpacity
      style={styles.signInBorderButton}
      onPress={() => {
        Alert.alert(
          'Sign in and Sing Up button pressed'
        );
      }}
    >

    <Text style={{
      fontSize:15,
      fontWeight:'300',
      color:'#fff',
    }}
    >
    Log in
    </Text>

    </TouchableOpacity>


    <Image 
          source= {Logo} 
          style= {[styles.logo , {height: height * 0.4}]}
          resizeMode="contain"/>

    <View style={styles.hairline} />
      <Text style={styles.loginButtonBelowText1}>Prydan Consultancy</Text>
    <View style={styles.hairline} />
  </View>


  );
};


const styles = StyleSheet.create({
   
    root: {
        alignItems: 'center',
        padding: 20,
        
    },

    txt: {
        fontWeight: '500',
        alignSelf:'flex-start',
        fontSize: 16,
        margin: 4,
    },


    signInBorderButton:{
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginLeft:242,
      borderRadius:6,
      borderWidth:2,
      borderColor:'#fff',
      backgroundColor:'#1B9CFC'
    },

   
    logo:{
        marginTop:-50,
        width: 400, 
        maxWidth:400,
        maxHeight:300
    },

  hairline: {
    marginTop:-30,
  backgroundColor: '#000000',
  height: 3,
  width: 420
},

loginButtonBelowText1: {
  marginTop:-28,
  fontFamily: 'AvenirNext-Bold',
  fontSize: 20,
  paddingHorizontal: 5,
  alignSelf: 'center',
  color: '#000000'
},
    
});

export default Landingpage;
