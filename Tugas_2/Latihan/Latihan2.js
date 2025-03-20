import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import HistoryText from "../components/HistoryText"; 
import ProfileImage from "../components/ProfileImage"; 

class Latihan2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HistoryText />
        <ProfileImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
});

export default Latihan2;