import { I18nManager, Image, Text, View } from "react-native";
import React from "react";
import styles from "./Offer.styles";
import { OfferProps } from "src/types";

const Offer = ({ item, index }: OfferProps) => {
  return (
    <View style={styles.itemContainer} key={index}>
      <Image
        source={{ uri: item.background }}
        style={[styles.imageContainer]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.category}>
          {I18nManager.isRTL
            ? item.brand.sector.title_ar
            : item.brand.sector.title_en}
        </Text>
        <Text style={styles.headline}>{item.brand.title}</Text>

        <Text style={styles.description}>{item.title}</Text>
      </View>
    </View>
  );
};

export default Offer;
