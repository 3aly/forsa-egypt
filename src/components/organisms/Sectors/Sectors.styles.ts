import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  contentContainer: {
    height: "50%",
    ...layouts.my.lg,
  },
});

export default styles;
