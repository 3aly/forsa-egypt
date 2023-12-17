import { layouts, spacing } from "@constants/styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contentContainer: {},
  headline: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
    ...layouts.mx.lg,
  },
});

export default styles;
