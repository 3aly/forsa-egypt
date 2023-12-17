import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  contentContainer: {
    // backgroundColor: "red",
    // height: "90%",
    // flex: 0.8,
  },
  headline: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
    ...layouts.mx.lg,
    ...layouts.mb.sm,
  },
});

export default styles;
