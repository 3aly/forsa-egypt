import { Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./LangPicker.styles";

import { Picker } from "@react-native-picker/picker";

const LangPicker = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = ["en", "ar"];
  const handleLanguageChange = (value: string) => setSelectedLanguage(value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Language</Text>

      <Picker
        style={styles.pickerContainer}
        selectedValue={selectedLanguage}
        onValueChange={handleLanguageChange}
      >
        {languages.map((language) => (
          <Picker.Item
            key={language}
            label={language.toUpperCase()}
            value={language}
          />
        ))}
      </Picker>
    </View>
  );
};

export default LangPicker;
