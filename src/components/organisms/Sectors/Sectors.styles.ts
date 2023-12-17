import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  headline: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
    ...layouts.mx.sm,
    ...layouts.mb.md,
  },
  contentContainer: {
    ...layouts.mx.md,
  },
});

export default styles;
