import { Image, ImageBackground, Text, View } from "react-native";
import React from "react";
import styles from "./ProfileCard.styles";

import { ProfileCardProps } from "src/types";

const ProfileCard = ({ name, pic }: ProfileCardProps) => {
  return (
    <View style={styles.itemContainer}>
      <ImageBackground style={styles.image} source={pic}></ImageBackground>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default ProfileCard;
