import { ImageBackground, Text, View } from "react-native";
import React from "react";
import { SVG } from "@components/atoms";
import styles from "./Banner.styles";
import { t } from "i18next";
import { IMAGES } from "@assets/index";

const Banner = () => {
  return (
    <ImageBackground source={IMAGES.bannerBG} style={styles.container}>
      <SVG source="Nike" />

      <View style={styles.leftContainer}>
        <Text style={styles.title}>Check out latest offers</Text>
        <SVG source="Arrow" />
      </View>
    </ImageBackground>
  );
};

export default Banner;
