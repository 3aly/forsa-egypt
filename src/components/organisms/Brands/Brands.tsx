import React, { useState } from "react";
import styles from "./Brands.styles";
import { FlatList } from "react-native-gesture-handler";
import { Brand } from "@components/molecules";
import { BrandType, BrandsProps } from "src/types";

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
            : brands?.filter(
                (item: BrandType) => item.sector.title === activeCategory
              )
        }
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        horizontal
      />
    </>
  );
};

export default Brands;
