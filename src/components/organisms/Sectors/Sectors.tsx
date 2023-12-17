import { Text, View } from "react-native";
import React from "react";
import styles from "./Sectors.styles";

import { FlatList } from "react-native-gesture-handler";
import { Sector } from "@components/molecules";
import { SectorType, SectorsProps } from "src/types";

const Sectors = ({
  sectors = [],
  activeIndex,
  setActiveIndex,
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
      <Text style={styles.headline}>Top brands in retail</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={[{ label: "All" }, ...sectors]}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

export default Sectors;
