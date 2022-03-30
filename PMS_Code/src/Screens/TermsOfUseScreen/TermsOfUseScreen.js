import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TermsOfUseScreen = () => {
  return (
    <View>
      <Text style={styles.head}>Our Terms of Use</Text>
      <Text style={styles.body}>
        1. We don't have any Terms of Use now but in the future we will make
        some terms of use'
      </Text>
      <Text style={styles.body}>
        2. Now you can use our app to make your project success.
      </Text>
    </View>
  );
};

export default TermsOfUseScreen;

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },

  body: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 5,
  },
});
