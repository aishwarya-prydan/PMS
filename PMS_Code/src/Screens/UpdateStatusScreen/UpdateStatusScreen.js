import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ProgressBar from '../../Components/ProgressBar/ProgressBar.js';
import LastStatus from '../../Components/LastStatusComponent/LastStatusComponent.js';
import FlatList from '../../Components/FlatList/FlatList.js';

const data = [
  {
    percentage: 70,
    color: 'blue',
    max: 15,
  },
];

export default function UpdateStatusScreen() {
  return (
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <LastStatus />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
        {data.map((p, i) => {
          return (
            <ProgressBar
              key={i}
              percentage={p.percentage}
              text={p.text}
              color={p.color}
              delay={500 + 100 * i}
              max={p.max}
            />
          );
        })}
      </View>
      <FlatList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
