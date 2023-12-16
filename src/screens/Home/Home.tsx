import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { useFetchSectors } from "@hooks/index";
import { Disclaimer, Header } from "@components/molecules";
import { IMAGES } from "@assets/index";
import styles from "./Home.styles";

const Home = () => {
  const { data } = useFetchSectors({
    onSuccess: (data: object) => {
      console.log("data", data);
    },
  });
  console.log("datatatable", data);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        source={IMAGES.headerBG}
        // style={{ flex: 1}}
      >
        <Header />
        <Disclaimer />
        <Text>asdasd</Text>
      </ImageBackground>
    </View>
  );
};

export default Home;
