import React from 'react';
import { View, Text } from 'react-native';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';

const SocialSignInButtons = () => {

    const OnSignInFacebook = () => {
        console.warn("Facebook");
    };

    const OnSignGoogle = () => {
        console.warn("Google");
    };

    const OnSignInApple = () => {
        console.warn("Apple");
    };
    
    return (
        <>

       
        <CustomButtons text="Sign In with Google"
         onPress={OnSignGoogle} 
         bgColor="#FAE9EA"
         fgColor="#DD4D44"
         />

        <CustomButtons 
         text="Sign In with Facebook"
         onPress={OnSignInFacebook} 
         bgColor="#E7EAF4" 
         fgColor="#4765A9"
        />

       
        </>
    );
}

export default SocialSignInButtons
