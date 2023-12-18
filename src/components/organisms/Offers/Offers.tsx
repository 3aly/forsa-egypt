import { Text, View } from "react-native";
import React from "react";
import styles from "./Offers.styles";

import { FlatList } from "react-native-gesture-handler";

import { OfferProps, OffersProps } from "src/types";
import { Offer } from "@components/molecules";
import { t } from "i18next";
import { Loader } from "@components/atoms";

const Offers = ({ offers, isLoading }: OffersProps) => {
  const renderItem = ({ item, index }: OfferProps) => {
    return (
      <>
        <Offer {...{ item, index }} />
      </>
    );
  };

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.headline}>{t("offers")}</Text>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={offers}
            contentContainerStyle={styles.contentContainer}
            renderItem={renderItem}
            numColumns={2}
          />
        </>
      )}
    </View>
  );
};

export default Offers;
