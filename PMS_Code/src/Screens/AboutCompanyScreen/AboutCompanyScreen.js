import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const AboutCompanyScreen = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.head}>Welcome To the Prydan PMS</Text>
      </View>

      <Text style={styles.main}>
        1. We build web and mobile solutions for various industries including
        product design and quality assurance with top-end UX product workshops
        and technology stack assessments. We offer feedback to support your idea
        using only the most suited and innovative technologies.
      </Text>

      <Text style={styles.main}>
        2. We build web and mobile solutions for various industries including
        product design and quality assurance with top-end UX product workshops
        and technology stack assessments. We offer feedback to support your idea
        using only the most suited and innovative technologies.
      </Text>

      <Text style={styles.main}>
        3. Client satisfaction is our main focus. We clearly understand
        expectations of clients upfront and make sure we meet them
        consistently.We understand that you expect satisfaction at every steps
        of your journey and we delivery it. We stay close to our customer,
        understand their preferences and feelings.It is our aim to take full
        responsibility of the complete customer experience.
      </Text>

      <Text style={styles.main}>
        4. Our undivided attention in our work makes us a result oriented
        organization. We take full ownership of the task, project and
        assignments given to us and pride to do whatever it takes to get desired
        outcomes. It's our passion that keeps us motivated and delivers results
        that people expect from us. Our full dedication has made us
        result-oriented.
      </Text>

      <Text style={styles.main}>
        5. Integrity is what we live at Prydan. You will find integrity in
        everything at Prydan. Integrity is in what we speak, what we do, what we
        commit, what we deliver, what we share with the community, what we give
        back to society. We are sure that anyone can feel a consistent and
        uncompromising adherence to strong moral and ethical principles and
        values.
      </Text>

      <Text style={styles.main}>
        6. Creative collaboration is the process teams use to define goals, come
        up with fresh ideas, and bring those ideas to life. It begins when a
        client first brings their project to your firm and ends when the final
        product is delivered. After the initial kickoff meeting, it’s up to the
        creative team to work together and come up with a concrete version of a
        client’s vision using their skills and artistic know-how.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
