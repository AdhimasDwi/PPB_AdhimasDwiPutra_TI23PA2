import React from "react";
import { View, Text, StyleSheet } from "react-native";

const data = [
  { label: "Nama", value: "   Adhimas Dwi Putra" },
  { label: "NPM", value: "   232310004" },
  { label: "Kelas", value: "   TI-23-PA" },
  { label: "Kampus", value: "   IBI Kesatuan Bogor" },
];

const Profile = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>My Portofolio</Text>
      <View style={styles.line} />
      {data.map((item, index) => (
        <View style={styles.row} key={index}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.separator}>:</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
    alignItems: "center",
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10, color: "#333" },
  line: { width: "100%", height: 2, backgroundColor: "#3498db", marginBottom: 10 },
  row: { flexDirection: "row", width: "100%", alignItems: "center", paddingVertical: 5 },
  label: { width: 80, fontSize: 16, fontWeight: "bold", color: "#555" },
  separator: { width: 10, textAlign: "center", fontSize: 16, fontWeight: "bold", color: "#555" },
  value: { flex: 1, fontSize: 16, color: "#222" },
});

export default Profile;
