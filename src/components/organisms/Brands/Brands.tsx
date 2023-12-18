import React from "react";
import styles from "./Brands.styles";
import { FlatList } from "react-native-gesture-handler";
import { Brand } from "@components/molecules";
import { BrandType, BrandsProps } from "src/types";
import { Loader } from "@components/atoms";
import { t } from "i18next";

const Brands = ({ brands, activeCategory, isLoading }: BrandsProps) => {
  const renderItem = ({ item, index }: { item: BrandType; index: number }) => {
    return (
      <>
        <Brand {...{ item, index }} />
      </>
    );
  };
  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={
              activeCategory === t("all")
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
      )}
    </>
  );
};

export default Brands;
