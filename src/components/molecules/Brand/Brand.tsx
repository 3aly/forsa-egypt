import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./Brand.styles";
import { BrandProps } from "@types/props";

const Brand = ({ item, index }: BrandProps) => {
  return (
    <View style={styles.itemContainer} key={index}>
      <Image
        source={{ uri: item.thumbnail }} // Adapt based on your image source
        style={[styles.image]}
      />
    </View>
  );
};

export default Brand;
