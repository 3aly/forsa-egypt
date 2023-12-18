import { Text, View } from "react-native";
import React from "react";
import styles from "./Sectors.styles";

import { FlatList } from "react-native-gesture-handler";
import { Sector } from "@components/molecules";
import { SectorType, SectorsProps } from "src/types";
import { t } from "i18next";
import { Loader } from "@components/atoms";

const Sectors = ({
  sectors = [],
  activeIndex,
  setActiveIndex,
  isLoading,
}: SectorsProps) => {
  const handleItemPress = (index: number, label: string) => {
    console.log("index: " + index);
    setActiveIndex({ index, label });
  };

  const renderItem = ({ item, index }: { item: SectorType; index: number }) => {
    const isActive = activeIndex.index === index;
    return (
      <>
        <Sector {...{ index, item, isActive, handleItemPress }} />
      </>
    );
  };
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.headline}>{t("sectors_one")}</Text>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={[{ label: `${t("all")}` }, ...sectors]}
            contentContainerStyle={styles.contentContainer}
            renderItem={renderItem}
            horizontal
          />
        </>
      )}
    </View>
  );
};

export default Sectors;
