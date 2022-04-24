/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, StyleSheet, SafeAreaView, Text, Alert} from 'react-native';
import React, {useContext} from 'react';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../Context/AuthContext';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const {isLoading, isLogout} = useContext(AuthContext);

  const OnEditPressed = () => {
    navigation.navigate('EditProfile');
  };

  const OnFeedbackPressed = () => {
    navigation.navigate('Feedback Form');
  };

  const OnComplaintPressed = () => {
    navigation.navigate('Complaint Form');
  };

  const OnLogOutPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 18}}>
          <Avatar.Image
            source={{
              uri: 'https://source.unsplash.com/random',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title
              style={
                (styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                  fontWeight: '700',
                  alignItems: 'center',
                })
              }>
              Aishwarya Birewar
            </Title>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker" type="font-awesome" size={20} />
          <Text style={{marginLeft: 20}}>Ahmedabad, India</Text>
        </View>

        <View style={styles.row}>
          <Icon name="phone" type="font-awesome" size={20} />
          <Text style={{marginLeft: 20}}>+91 9923475689 </Text>
        </View>

        <View style={styles.row}>
          <Icon name="envelope" type="font-awesome" size={20} />
          <Text style={{marginLeft: 20}}>aishwarya21@gmail.com</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={OnEditPressed}>
          <View style={styles.menuItem}>
            <Icon
              name="pencil-square-o"
              type="font-awesome"
              size={20}
              color="#777777"
            />
            <Text style={styles.menuItemText}> Edit Profile </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={OnFeedbackPressed}>
          <View style={styles.menuItem}>
            <Icon
              name="comment"
              type="font-awesome"
              size={20}
              color="#777777"
            />
            <Text style={styles.menuItemText}> Feedback </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={OnComplaintPressed}>
          <View style={styles.menuItem}>
            <Icon
              name="envelope"
              type="font-awesome"
              size={20}
              color="#777777"
            />
            <Text style={styles.menuItemText}> Complaints</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={isLogout}>
          <View style={styles.menuItem}>
            <Icon
              name="sign-out"
              type="font-awesome"
              size={22}
              color="#777777"
            />
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 60,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
export default ProfileScreen;
