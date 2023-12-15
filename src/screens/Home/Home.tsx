import { View, Text } from "react-native";
import React from "react";
import { useFetchSectors } from "@hooks/index";

const Home = () => {
  const { data } = useFetchSectors({
    onSuccess: (data) => {
      console.log("data", data);
    },
  });
  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

export default Home;
