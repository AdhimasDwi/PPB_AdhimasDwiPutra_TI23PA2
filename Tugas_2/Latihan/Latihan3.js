import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Latihan3 = () => {
  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png" }} 
        style={styles.logo}
      />

      
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a0080",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  loadingText: {
    fontSize: 16,
    color: "white",
    position: "absolute",
    bottom: 30, 
    left: 0,
    right: 0,
    textAlign: "center",
  },
});

export default Latihan3;
