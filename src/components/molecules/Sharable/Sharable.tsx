import { Dimensions, Image, Pressable, Share, Text, View } from "react-native";
import React from "react";
import { BrandProps, LoanProps, SharableProps } from "@types/props";

import styles from "./Sharable.styles";

const Sharable = ({ title, toShare }: SharableProps) => {
  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => Share.share({ message: `${toShare}` })}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </>
  );
};

export default Sharable;
