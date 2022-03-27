import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

const DeveloperInfoScreen = () => {
  const names = [
    {
      index: '1',
      name: 'Aishwarya',
    },
    {
      index: '2',
      name: 'Kishan',
    },
    {
      index: '3',
      name: 'Vedangi',
    },
  ];
  return (
    <FlatList
      // style={styles.listStyle}
      keyExtractor={index => {
        return index.index;
      }}
      data={names}
      renderItem={element => {
        console.log(element.item.name);
        return <Text style={styles.textStyle}>{element.item.name} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 25,
    backgroundColor: 'blue',
    margin: 15,
    color: '#fff',
    textAlign: 'center',
  },
  listStyle: {
    margin: 20,
    // padding: 1,
  },
});

export default DeveloperInfoScreen;
