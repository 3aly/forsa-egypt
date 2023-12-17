import { Image, ImageBackground, Text, View } from "react-native";
import React from "react";
import { SVG } from "@components/atoms";
import styles from "./ProfileCard.styles";
import { t } from "i18next";
import { IMAGES } from "@assets/index";

const ProfileCard = ({ name, pic }) => {
  return (
    <View style={styles.itemContainer}>
      <ImageBackground style={styles.image} source={pic}></ImageBackground>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default ProfileCard;
