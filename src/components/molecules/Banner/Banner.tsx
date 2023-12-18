import { I18nManager, ImageBackground, Text, View } from "react-native";
import React from "react";
import { SVG } from "@components/atoms";
import styles from "./Banner.styles";
import { IMAGES } from "@assets/index";
import { t } from "i18next";

const Banner = () => {
  return (
    <ImageBackground source={IMAGES.bannerBG} style={styles.container}>
      <SVG source="Nike" />

      <View style={styles.leftContainer}>
        <Text style={styles.title}>{t("banner_one")}</Text>
        <SVG source={I18nManager.isRTL ? "ArrowLeft" : "Arrow"} />
      </View>
    </ImageBackground>
  );
};

export default Banner;
