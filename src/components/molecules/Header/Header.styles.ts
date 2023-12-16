import { layouts } from "@constants/styles";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  container: {
    ...layouts.row,
    ...layouts.pt.xxxl,
    ...layouts.my.xl,
    ...layouts.mx.xxl,

    // ...layouts.xCentered,
    ...layouts.justifyBetween,
    ...layouts.yCentered,
  },
  leftContainer: {
    ...layouts.row,
    // ...layouts.px.xl,
    width: "16%",
    ...layouts.justifyBetween,
    // ...layouts.xCentered,
    // ...layouts.yCentered,
  },
});

export default styles;
