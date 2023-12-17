import { Text, View } from "react-native";
import React from "react";
import styles from "./Offers.styles";

import { FlatList } from "react-native-gesture-handler";

import { OfferProps, OffersProps } from "src/types";
import { Offer } from "@components/molecules";

const Offers = ({ offers }: OffersProps) => {
  const renderItem = ({ item, index }: OfferProps) => {
    return (
      <>
        <Offer {...{ item, index }} />
      </>
    );
  };

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.headline}>Offers Select for You </Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={offers}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default Offers;
