import { Text, View } from "react-native";
import React from "react";
import { SVG } from "@components/atoms";
import styles from "./Disclaimer.styles";
import { t } from "i18next";

const Disclaimer = () => {
  return (
    <View style={styles.container}>
      <SVG source="Note" />

      <View style={styles.leftContainer}>
        <Text style={styles.title}>{t("ad")}</Text>
        <Text style={styles.subtitle}>
          Complete your infoand get up to EGP 100,000
        </Text>
      </View>
    </View>
  );
};

export default Disclaimer;
