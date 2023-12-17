import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import { SVG } from "@components/atoms";
import styles from "./Brands.styles";
import { t } from "i18next";
import { IMAGES } from "@assets/index";
import { FlatList } from "react-native-gesture-handler";
import { Brand, Sector } from "@components/molecules";
import { BrandsProps } from "@types/props";
import { BrandType } from "@types/types";

const Brands = ({ brands, activeCategory }: BrandsProps) => {
  const renderItem = ({ item, index }: { item: BrandType; index: number }) => {
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
            : brands?.filter((item) => item.sector.title === activeCategory)
        }
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        horizontal
      />
    </>
  );
};

export default Brands;
