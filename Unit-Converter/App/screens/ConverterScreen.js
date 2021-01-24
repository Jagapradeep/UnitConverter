import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppNumberInput from "../config/AppNumberInput";
import AppPicker from "../config/AppPicker";
import Units from "../config/Units";
import UnitConverter from "../utils/UnitConverter";

function ConverterScreen({ route }) {
  const [inputCategory, setInputCategory] = useState(
    Units[route.params.label][0]
  );
  const [outputCategory, setOutputCategory] = useState(
    Units[route.params.label][0]
  );
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);

  const handleChange = async (value, from, to) => {
    const label = route.params.label;
    const convertedValue = await UnitConverter(label, value, from, to);
    setOutput(convertedValue);
  };

  return (
    <>
      <View style={styles.top}>
        <AppPicker
          color={colors.secondary}
          selectedItem={inputCategory}
          onSelectItem={(item) => {
            setInputCategory(item);
            handleChange(input, item, outputCategory);
          }}
          items={Units[route.params.label]}
        />
        <AppNumberInput
          backgroundColor={colors.medium}
          color={colors.secondary}
          onChangeText={(number) => {
            setInput(number);
            handleChange(number, inputCategory, outputCategory);
          }}
        />
      </View>
      <View style={styles.bottom}>
        <AppPicker
          color={colors.primary}
          selectedItem={outputCategory}
          onSelectItem={(item) => {
            setOutputCategory(item);
            handleChange(input, inputCategory, item);
          }}
          items={Units[route.params.label]}
        />
        <AppNumberInput
          editable={false}
          backgroundColor={colors.secondary}
          color={colors.primary}
          value={output.toString()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: 10,
  },
  top: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ConverterScreen;
