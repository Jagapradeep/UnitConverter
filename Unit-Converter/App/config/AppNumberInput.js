import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

function AppNumberInput({
  backgroundColor,
  color,
  editable = true,
  onChangeText,
  value,
}) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TextInput
        style={[styles.input, { color }]}
        editable={editable}
        keyboardType={"numeric"}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: "90%",
    padding: 15,
    marginVertical: 10,
  },
  input: {
    fontSize: 25,
    textAlign: "center",
  },
});

export default AppNumberInput;
