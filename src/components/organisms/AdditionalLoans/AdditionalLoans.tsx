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
import styles from "./AdditionalLoans.styles";
import { t } from "i18next";
import { IMAGES } from "@assets/index";
import { FlatList } from "react-native-gesture-handler";
import { Brand, Loan, Sector } from "@components/molecules";
import getRandomGradient from "@utils/getRandomGradient";
import { AdditionalLoansProps, LoanType } from "src/types";

const AdditionalLoans = ({ loans }: AdditionalLoansProps) => {
  const renderItem = ({ item, index }: { item: LoanType; index: number }) => {
    return (
      <>
        <Loan {...{ item, index }} />
      </>
    );
  };
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.headline}>Request Additional Loan</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={loans}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default AdditionalLoans;
