import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  contentContainer: {
    ...layouts.mx.sm,
    ...layouts.my.md,
    // height: "60%",
  },
});

export default styles;
