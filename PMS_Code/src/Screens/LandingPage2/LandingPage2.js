import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from '../../../src/Components/Header/Header.js';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.childContainer}>
        <Text style={{ fontSize: 20 }}> Hello World</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef",
    flexDirection: "column"
  },
  childContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 100
  },
  header: {
    backgroundColor: "#3B71F3",
    width: "100%",
    height: "15%"
  }
});