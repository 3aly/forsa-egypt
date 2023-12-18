import { I18nManager, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./LangPicker.styles";

import { Picker } from "@react-native-picker/picker";
import { changeLanguage, t } from "i18next";
import { toggleLanguage } from "@utils/toggleLanguage";

const LangPicker = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    I18nManager.isRTL ? "العربية" : "English"
  );

  const languages = ["English", "العربية"];
  const handleLanguageChange = (value: string) => {
    toggleLanguage();
    setSelectedLanguage(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("change_language")}</Text>

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
