import React from 'react';
import {StyleSheet, Text, View, StatusBar, Button} from 'react-native';
import {Header, PricingCard} from 'react-native-elements';
export default function QuotationPrice() {
  return (
    <View style={styles.container}>
      {/* <Header
        barStyle="light-content"
        leftComponent={{icon: 'menu', color: '#fff', paddingTop: 10}}
        centerComponent={{
          text: 'King Shop',
          style: {color: '#fff', paddingTop: 10},
        }}
        rightComponent={{icon: 'logout', color: '#fff', paddingTop: 10}}
        containerStyle={{
          backgroundColor: '#f4554a',
          justifyContent: 'space-around',
        }}
      /> */}
      {/* <StatusBar animated={true} backgroundColor="#f4554a" /> */}
      <View style={styles.mainbox}>
        {/* <Text style={styles.textinfo}>
          React Native Pricing Card Example - mywebtuts.com
        </Text> */}
        {/* <PricingCard
          color="darkseagreen"
          title="Free"
          price="$0"
          info={['5 Product Delivery', 'Basic Support']}
          button={{title: ' Buy', icon: 'shopping-cart'}}
        /> */}
        <PricingCard
          color="blue"
          title="Quotation for Developer"
          price="Rs 25,000"
          info={['10 Product Delivery', 'All Core Features']}
          button={{title: 'Hire'}}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1200,
    backgroundColor: '#fff',
  },
  textinfo: {
    margin: 10,
    textAlign: 'center',
    fontSize: 15,
  },
  mainbox: {
    height: 1200,
  },
});
