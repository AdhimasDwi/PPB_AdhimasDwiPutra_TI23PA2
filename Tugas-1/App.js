import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Profile from "./components/Profile"; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Selamat Datang!</Text>
      <Profile />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8e994", 
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2c3e50", 
  },
});
