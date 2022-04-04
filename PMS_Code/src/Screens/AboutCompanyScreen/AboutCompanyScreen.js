import React from 'react';
import {
  View,
  Animated,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {useRef} from 'react';
import Logo from '../../../assets/images/Logo.png';
const H_MAX_HEIGHT = 200;
const H_MIN_HEIGHT = 100;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

const AboutCompanyScreen = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const {height} = useWindowDimensions();

  return (
    <View style={{flex: 1}}>
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false}, //this is to solve the warn animated.event now requires a second argument for options
        )}
        scrollEventThrottle={16}>
        <View style={{paddingTop: H_MAX_HEIGHT}}>
          {/** Page content goes here **/}

          <View>
            <Text style={styles.head}>Welcome To the Prydan PMS</Text>
          </View>

          <Text style={styles.main}>
            1. We build web and mobile solutions for various industries
            including product design and quality assurance with top-end UX
            product workshops and technology stack assessments. We offer
            feedback to support your idea using only the most suited and
            innovative technologies.
          </Text>

          <Text style={styles.main}>
            2. We build web and mobile solutions for various industries
            including product design and quality assurance with top-end UX
            product workshops and technology stack assessments. We offer
            feedback to support your idea using only the most suited and
            innovative technologies.
          </Text>

          <Text style={styles.main}>
            3. Client satisfaction is our main focus. We clearly understand
            expectations of clients upfront and make sure we meet them
            consistently.We understand that you expect satisfaction at every
            steps of your journey and we delivery it. We stay close to our
            customer, understand their preferences and feelings.It is our aim to
            take full responsibility of the complete customer experience.
          </Text>

          <Text style={styles.main}>
            4. Our undivided attention in our work makes us a result oriented
            organization. We take full ownership of the task, project and
            assignments given to us and pride to do whatever it takes to get
            desired outcomes. It's our passion that keeps us motivated and
            delivers results that people expect from us. Our full dedication has
            made us result-oriented.
          </Text>

          <Text style={styles.main}>
            5. Integrity is what we live at Prydan. You will find integrity in
            everything at Prydan. Integrity is in what we speak, what we do,
            what we commit, what we deliver, what we share with the community,
            what we give back to society. We are sure that anyone can feel a
            consistent and uncompromising adherence to strong moral and ethical
            principles and values.
          </Text>

          <Text style={styles.main}>
            6. Creative collaboration is the process teams use to define goals,
            come up with fresh ideas, and bring those ideas to life. It begins
            when a client first brings their project to your firm and ends when
            the final product is delivered. After the initial kickoff meeting,
            it’s up to the creative team to work together and come up with a
            concrete version of a client’s vision using their skills and
            artistic know-how.
          </Text>
        </View>
      </ScrollView>

      {/**
       * We put the header at the bottom of
       * our JSX or it will not take priority
       * on Android (for some reason, simply
       * setting zIndex does not work)
       **/}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: headerScrollHeight,
          width: '100%',
          overflow: 'hidden',
          zIndex: 999,
          // STYLE
          borderBottomColor: '#EFEFF4',
          borderBottomWidth: 2,
          padding: 10,
          backgroundColor: '#fff',
        }}>
        {/* <Image
          source={{uri: 'https://via.placeholder.com/300'}}
          style={{flex: 1}}
          resizeMode={'contain'}
        /> */}

        <Image
          source={Logo}
          style={[
            styles.logo,
            {height: height * 0.3},
            {flex: 1},
            {alignSelf: 'center'},
          ]}
          // style={{flex: 1}}
          resizeMode={'contain'}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 370,
    maxWidth: 400,
    maxHeight: 300,
  },

  head: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
    color: '#000',
  },

  main: {
    fontSize: 15,
    marginLeft: 5,
    marginRight: 5,
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: 'center',
    textAlign: 'justify',
  },
});

export default AboutCompanyScreen;
