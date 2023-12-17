import { Dimensions, Image, Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./Loan.styles";
import { BrandProps, LoanProps } from "@types/props";
import getRandomGradient from "@utils/getRandomGradient";
import { LinearGradient } from "expo-linear-gradient";

const Loan = ({ item, index }: LoanProps) => {
  // const itemWidth = Dimensions.get("window").width / 2;
  return (
    <LinearGradient
      colors={["#3FB3BE", "#0EBCB7", "#2A4D5C"]}
      style={[styles.itemContainer]}
    >
      <Text style={{ color: "#fff" }}>{item.name}</Text>
    </LinearGradient>
  );
};

export default Loan;
