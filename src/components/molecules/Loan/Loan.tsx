import { Dimensions, Image, Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./Loan.styles";
import { LinearGradient } from "expo-linear-gradient";
import { LoanProps } from "src/types";

const Loan = ({ item, index }: LoanProps) => {
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
