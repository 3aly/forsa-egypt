import { View, Text, ImageBackground } from "react-native";
import React, { useState } from "react";
import { useFetchSectors } from "@hooks/index";
import { Banner, Disclaimer, Header } from "@components/molecules";
import { IMAGES } from "@assets/index";
import styles from "./Home.styles";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Sectors } from "@components/organisms";
import Brands from "@components/organisms/Brands/Brands";
import { useFetchBrands } from "@hooks/useFetchBrands/useFetchBrands";

const Home = () => {
  const { data: sectors, isLoading, error } = useFetchSectors({});
  const { data: brands, isLoading: brandsLoading } = useFetchBrands({});
  // console.log("first response: ", data.results);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        source={IMAGES.headerBG}
        // style={{ flex: 1}}
      >
        <Header />
        <Disclaimer />
        <Banner />
        <Sectors
          sectors={sectors?.results}
          {...{ activeIndex, setActiveIndex }}
        />
      </ImageBackground>
      <Brands brands={brands?.results} activeCategory={activeIndex.label} />
    </View>
  );
};

export default Home;
