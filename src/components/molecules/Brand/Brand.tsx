import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./Brand.styles";

const Brand = ({ item, index }) => {
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
