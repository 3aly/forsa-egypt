import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import { SVG } from "@components/atoms";
import styles from "./Brands.styles";
import { t } from "i18next";
import { IMAGES } from "@assets/index";
import { FlatList } from "react-native-gesture-handler";
import { Brand, Sector } from "@components/molecules";

const Brands = ({ brands, activeCategory }) => {
  const [activeIndex, setActiveIndex] = useState();
  console.log(brands);
  const handleItemPress = (index) => {
    console.log("index: " + index);
    setActiveIndex(index);
  };

  const renderItem = ({ item, index }) => {
    return (
      <>
        <Brand {...{ item, index }} />
      </>
    );
  };
  return (
    <>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={
          activeCategory === "All"
            ? brands
            : brands.filter((item) => item.sector.title === activeCategory)
        }
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        horizontal
      />
    </>
  );
};

export default Brands;
