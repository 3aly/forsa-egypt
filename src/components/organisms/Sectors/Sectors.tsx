import { ImageBackground, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import { SVG } from "@components/atoms";
import styles from "./Sectors.styles";
import { t } from "i18next";
import { IMAGES } from "@assets/index";
import { FlatList } from "react-native-gesture-handler";
import { Sector } from "@components/molecules";

const Sectors = ({ sectors, activeIndex, setActiveIndex }) => {
  const handleItemPress = (index, label) => {
    console.log("index: " + index);
    setActiveIndex({ index, label });
  };

  const renderItem = ({ item, index }) => {
    const isActive = activeIndex.index === index;
    return (
      <>
        <Sector {...{ index, item, isActive, handleItemPress }} />
      </>
    );
  };
  return (
    <>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={[{ label: "All" }, ...sectors]}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        horizontal
      />
    </>
  );
};

export default Sectors;
