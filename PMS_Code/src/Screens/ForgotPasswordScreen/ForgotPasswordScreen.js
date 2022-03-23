import React, {useState} from 'react';
import {  Text, View , StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../../src/Components/CustomInput/CustomInput.js';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
import {useNavigation} from '@react-navigation/native';


    const ForgotPasswordScreen = () => {   
  
    const [Email , SetEmail] = useState('') ;
    const navigation = useNavigation();

    const ConfirmPressed = () => {
        console.warn("Confirm");
    };
    
       const OnSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const OnResendPress= () => {
        console.warn("Code");
    };
  

    return (
        <ScrollView>

        <View style={styles.root}>
          
          <Text style={styles.title}>
            Reset your Password
          </Text>
    

        <CustomInput
         placeholder="Enter your Email" 
         value={Email}
         setValue={SetEmail} 
         secureTextEntry={true}         
        />


        <CustomButtons text="Confirm" onPress={ConfirmPressed} />

           <Text >
            We have sent you a confirmation code.
          </Text>

                
        <CustomButtons text="Resend Code"
         onPress={OnResendPress} 
         type="SECONDARY" 
        />

        <CustomButtons text="Back to Sign in"
         onPress={OnSignInPress} 
         type="TERTIARY" 
        />

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
   
    root: {
        alignItems: 'center',
        padding: 20,
        
    },
   
   
    title: { 
        fontSize:24,
        fontWeight:"bold",
        color:"#051C60",
        margin:10      

    },

    text: {
        color: 'gray',
        marginVertical:10

    },

    link: {

        color: '#FDB075',

    },

});

export default ForgotPasswordScreen
