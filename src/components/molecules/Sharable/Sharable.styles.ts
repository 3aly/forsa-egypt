import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  container: {
    ...layouts.m.xxl,
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
  },
});

export default styles;
