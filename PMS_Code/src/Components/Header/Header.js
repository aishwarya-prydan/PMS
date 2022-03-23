import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.textContainer}>
        <Text style={styles.textWhite}>PMS</Text>
              </View>
      <View style={styles.tabContainer}>
        <View>
          <Text>Company</Text>
        </View>
       <View>
          <Text>Recent Projects</Text>
        </View>
        <View>
          <Text>Developers</Text>
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    marginTop: 37
  },
  textWhite: {
    color: "white",
    fontSize:24,
    fontWeight:"bold",
    marginVertical: 5

  },
  tabContainer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: "20%",
    alignItems: "center",
    marginTop: 10,
    height: 40
  }
});
export default Header;