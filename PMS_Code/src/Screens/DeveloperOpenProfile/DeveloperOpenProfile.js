/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const DeveloperOpenProfile = () => {
  const navigation = useNavigation();

  const OnEditPressed = () => {
    navigation.navigate('EditProfile');
  };

  const OnLogOutPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View
          style={{
            marginTop: 18,
            alignSelf: 'center',
          }}>
          <Avatar.Image
            source={{
              uri: 'https://source.unsplash.com/random',
            }}
            // alignItems="center"
            size={100}
          />
        </View>
      </View>

      <View
        style={{
          alignSelf: 'center',
          marginBottom: 5,
        }}>
        <Title
          style={
            (styles.title,
            {
              textAlign: 'center',
            })
          }>
          Kishan Das
        </Title>

        <Caption style={styles.caption}>Full Stack Developer</Caption>
        <Caption style={styles.caption2}>
          Has expertise in Python, React-Native, DjanGo
        </Caption>
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
          {/* <Icon name="tasks" type="font-awesome" size={10} color="#777777" /> */}
          <Caption style={styles.caption}>Experience</Caption>
          <Title>2</Title>
        </View>
        <View style={styles.infoBox}>
          <Caption style={styles.caption}>Projects</Caption>
          <Title>4</Title>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.bio}>
            ➢ Kishan has professional experience working with Python, React
            Native, HTML, CSS, DJAngo.Experience with building pixel perfect
            UI's that match designs {'\n'}➢ Has a GitHub profile
            https://github.com/kishan-prydan {'\n'}➢ Expert in developing Mobile
            based applications and cross browser applications {'\n'}➢ Love
            coding and look forward to taking on complex features. {'\n'}➢
            Proven ability to analyse problems, root causes, and develop
            innovative solutions to business challenges and streamlining
            operations. {'\n'}➢ Worked on GIT for version control, Code Review{' '}
            {'\n'}➢ Performed Unit testing {'\n'}➢ Experience working with
            Redux.{'\n'}➢ Created Reusable react presentation and container
            components. {'\n'}➢ Good understanding and usage of states and
            props.{'\n'}➢ Implemented EcmaScript6 (ES6) arrow functions,
            constants, block-scope variables, class inheritance..{'\n'}➢ Solid
            experience of redux development using Babel, Web pack, NPM.
          </Text>
        </View>
      </ScrollView>
      {/* <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon
            name="briefcase"
            type="font-awesome"
            size={20}
            color="#777777"
          />
          <Text style={{color: '#777777', marginLeft: 20}}>
            Experience: 2 Years
          </Text>
        </View>

        <View style={styles.row}>
          <Icon name="tasks" type="font-awesome" size={20} color="#777777" />
          <Text style={{color: '#777777', marginLeft: 20}}>Projects: 10+ </Text>
        </View>

        <View style={styles.row}>
          <Icon name="star" type="font-awesome" size={20} color="#777777" />
          <Text style={{color: '#777777', marginLeft: 20}}>4.5 Ratings</Text>
        </View>
      </View> */}
      {/* 
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
      </View> */}

      {/* <View style={styles.menuWrapper}>
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
        <TouchableRipple onPress={OnLogOutPressed}>
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
      </View> */}
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
    fontWeight: 'black',
  },
  caption: {
    fontSize: 14,
    lineHeight: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caption2: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '300',
    textAlign: 'center',
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
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 26,
  },
  bio: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 18,
  },
});
export default DeveloperOpenProfile;
