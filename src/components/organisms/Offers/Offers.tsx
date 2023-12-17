import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SVG } from "@components/atoms";
import styles from "./Offers.styles";
import { t } from "i18next";
import { IMAGES } from "@assets/index";
import { FlatList } from "react-native-gesture-handler";
import { Brand, Loan, Offer, Sector } from "@components/molecules";
import { AdditionalLoansProps, OffersProps } from "@types/props";
import getRandomGradient from "@utils/getRandomGradient";
import { LoanType } from "@types/types";

const Offers = ({ offers }: OffersProps) => {
  const itemWidth = Dimensions.get("window").width / 2;

  const renderItem = ({ item, index }) => {
    console.log("item renderedrenderedrendered", item);
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
        // horizontal
        numColumns={2}
      />
    </View>
  );
};

export default Offers;
