import { View, ImageBackground, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import {
  useFetchSectors,
  useFetchBrands,
  useFetchAdditionalLoans,
  useFetchOffers,
} from "@hooks/index";
import { Banner, Disclaimer, Header } from "@components/molecules";
import { IMAGES } from "@assets/index";
import styles from "./Home.styles";

import {
  AdditionalLoans,
  Brands,
  Offers,
  Sectors,
} from "@components/organisms";
import { t } from "i18next";

const Home = () => {
  const { data: sectors, isLoading: sectorLoading, error } = useFetchSectors();
  const { data: brands, isLoading: brandsLoading } = useFetchBrands();
  const { data: loans, isLoading: loansLoading } = useFetchAdditionalLoans();
  const { data: offers, isLoading: offersLoading } = useFetchOffers();
  const [activeIndex, setActiveIndex] = useState<{
    index: number;
    label: string;
  }>({ index: 0, label: t("all") });
  const renderItem = ({
    item,
    index,
  }: {
    item: { name: string; data: []; loading: boolean };
    index: number;
  }) => {
    switch (item.name) {
      case "brands":
        return (
          <>
            <Brands
              brands={item.data}
              activeCategory={activeIndex.label}
              isLoading={item.loading}
            />
          </>
        );
      case "loans":
        return (
          <>
            <AdditionalLoans loans={item.data} isLoading={item.loading} />
          </>
        );
      case "offers":
        return (
          <>
            <>
              <Offers offers={item.data} isLoading={item.loading} />
            </>
          </>
        );

      default:
        return <></>;
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={IMAGES.headerBG}>
        <Header />
        <Disclaimer />
        <Banner />
        <Sectors
          sectors={sectors?.results}
          {...{ activeIndex, setActiveIndex }}
          isLoading={sectorLoading}
        />
      </ImageBackground>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={[
          { name: "brands", data: brands?.results, loading: brandsLoading },
          { name: "loans", data: loans?.results, loading: loansLoading },
          { name: "offers", data: offers?.results, loading: offersLoading },
        ]}
        renderItem={renderItem}
      />
      <ScrollView></ScrollView>
    </View>
  );
};

export default Home;
