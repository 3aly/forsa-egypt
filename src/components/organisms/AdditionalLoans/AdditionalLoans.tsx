import { Text, View } from "react-native";
import React from "react";
import { Loader } from "@components/atoms";
import styles from "./AdditionalLoans.styles";
import { t } from "i18next";
import { FlatList } from "react-native-gesture-handler";
import { Loan } from "@components/molecules";
import { AdditionalLoansProps, LoanType } from "src/types";

const AdditionalLoans = ({ loans, isLoading }: AdditionalLoansProps) => {
  const renderItem = ({ item, index }: { item: LoanType; index: number }) => {
    return (
      <>
        <Loan {...{ item, index }} />
      </>
    );
  };
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.headline}>{t("additional_loan")}</Text>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={loans}
            contentContainerStyle={styles.contentContainer}
            renderItem={renderItem}
            numColumns={2}
          />
        </>
      )}
    </View>
  );
};

export default AdditionalLoans;
