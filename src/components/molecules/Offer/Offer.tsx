import { Dimensions, Image, Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./Offer.styles";
import { BrandProps, LoanProps } from "@types/props";
import getRandomGradient from "@utils/getRandomGradient";
import { LinearGradient } from "expo-linear-gradient";

const Offer = ({ item, index }: LoanProps) => {
  return (
    <View style={styles.itemContainer} key={index}>
      <Image
        source={{ uri: item.background }} // Replace with your image source
        style={[styles.imageContainer]} // Adjust size and style as needed
      />
      <View style={styles.textContainer}>
        <Text style={styles.category}>{item.brand.sector.title_en}</Text>
        <Text style={styles.headline}>{item.brand.title}</Text>

        <Text style={styles.description}>{item.title}</Text>
      </View>
    </View>
  );
};

export default Offer;
