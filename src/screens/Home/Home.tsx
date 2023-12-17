import { View, ImageBackground, ScrollView } from "react-native";
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

const Home = () => {
  const { data: sectors, isLoading, error } = useFetchSectors();
  const { data: brands, isLoading: brandsLoading } = useFetchBrands();
  const { data: loans, isLoading: loansLoading } = useFetchAdditionalLoans();
  const { data: offers, isLoading: offersLoading } = useFetchOffers();
  const [activeIndex, setActiveIndex] = useState<{
    index: number;
    label: string;
  }>({ index: 0, label: "All" });

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={IMAGES.headerBG}>
        <Header />
        <Disclaimer />
        <Banner />
        <Sectors
          sectors={sectors?.results}
          {...{ activeIndex, setActiveIndex }}
        />
      </ImageBackground>
      <ScrollView>
        <Brands brands={brands?.results} activeCategory={activeIndex.label} />
        <AdditionalLoans loans={loans?.results} />
        <Offers offers={offers?.results} />
      </ScrollView>
    </View>
  );
};

export default Home;
