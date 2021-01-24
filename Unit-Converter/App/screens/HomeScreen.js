import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

import AppText from "../config/AppText";
import AppButton from "../config/AppButton";
import colors from "../config/colors";

function HomeScreen({ navigation }) {
  const handleOnPress = (label) => {
    navigation.navigate("Converter", { label });
  };

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <AppText style={styles.brand}>CONVERTER</AppText>
      <AppButton title="Distance" onPress={() => handleOnPress("Distance")} />
      <AppButton
        title="Temperature"
        onPress={() => handleOnPress("Temperature")}
      />
      <AppButton title="Currency" onPress={() => handleOnPress("Currency")} />
      <AppButton title="Time" onPress={() => handleOnPress("Time")} />
      <AppButton title="Number" onPress={() => handleOnPress("Number")} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  brand: {
    position: "absolute",
    top: 100,
    fontSize: 30,
    fontWeight: "bold",
    color: colors.dark,
  },
});
export default HomeScreen;
