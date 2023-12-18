import i18n from "i18next";
import { I18nManager, NativeModules } from "react-native";
export const toggleLanguage = async () => {
  if (i18n.language === "ar") {
    i18n.language = "en";
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  } else {
    i18n.language = "ar";
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  }

  NativeModules.DevSettings.reload();
};
