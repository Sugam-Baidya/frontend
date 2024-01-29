import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function FlatButton({ text, press }) {
  return (
    <TouchableOpacity onpress={press}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginHorizontal: "30%",
    backgroundColor: "white",
  },
  buttonText: {
    color: "#47A992",
    fontSize: 16,
    textAlign: "center",
  },
});
