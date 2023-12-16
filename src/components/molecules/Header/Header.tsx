import { View } from "react-native";
import React from "react";
import { SVG } from "@components/atoms";
import styles from "./Header.styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <SVG source="Search" />

      <SVG source="Logo" />
      <View style={styles.leftContainer}>
        <SVG source="Favorite" />
        <SVG source="Notification" />
      </View>
    </View>
  );
};

export default Header;
