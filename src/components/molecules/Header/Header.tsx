import { Text, View } from "react-native";
import React from "react";
import { SVG } from "@components/atoms";
import styles from "./Header.styles";
import { HeaderProps } from "src/types";

const Header = ({ showSearch = true, title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {showSearch ? (
        <SVG source="Search" />
      ) : (
        <View style={styles.emptyView}></View>
      )}
      {!title && <SVG source="Logo" />}
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.leftContainer}>
        <SVG source="Favorite" />
        <SVG source="Notification" />
      </View>
    </View>
  );
};

export default Header;
