/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import CustomButtons from '../../../src/Components/CustomButtons/CustomButtons.js';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements';

const ProfileScreen = () => {
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
                })
              }>
              Aishwarya Birewar
            </Title>

            <Caption style={styles.caption}>Prydan</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon
            name="map-marker"
            type="font-awesome"
            size={20}
            color="#777777"
          />
          <Text style={{color: '#777777', marginLeft: 20}}>
            Ahemdabad, India
          </Text>
        </View>

        <View style={styles.row}>
          <Icon name="phone" type="font-awesome" size={20} color="#777777" />
          <Text style={{color: '#777777', marginLeft: 20}}>
            +91 9923475689{' '}
          </Text>
        </View>

        <View style={styles.row}>
          <Icon name="envelope" type="font-awesome" size={20} color="#777777" />
          <Text style={{color: '#777777', marginLeft: 20}}>
            aishwarya21@gmail.com
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>2</Title>
          <Caption>Projects</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>4</Title>
          <Caption>Developer</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon
              name="envelope"
              type="font-awesome"
              size={20}
              color="#777777"
            />
            <Text style={styles.menuItemText}> Option1 </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon
              name="envelope"
              type="font-awesome"
              size={20}
              color="#777777"
            />
            <Text style={styles.menuItemText}> Option1 </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon
              name="envelope"
              type="font-awesome"
              size={20}
              color="#777777"
            />
            <Text style={styles.menuItemText}> Option1 </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="gear" type="font-awesome" size={22} color="#777777" />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
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
    fontSize: '24',
    fontWeight: 'bold',
  },
  caption: {
    fontsize: '11',
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
    height: 100,
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
