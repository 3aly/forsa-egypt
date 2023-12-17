import { Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./Sector.styles";
import { SectorProps } from "@types/index";

const Sector = ({ item, isActive, handleItemPress, index }: SectorProps) => {
  return (
    <View
      style={[styles.itemContainer, isActive && styles.activeItem]}
      key={index}
    >
      <Pressable onPress={() => handleItemPress(index, item?.label)}>
        <Text style={[isActive && styles.activeText]}>{item?.label}</Text>
      </Pressable>
    </View>
  );
};

export default Sector;
