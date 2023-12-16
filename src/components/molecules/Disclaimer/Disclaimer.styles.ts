import { layouts } from "@constants/styles";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  container: {
    ...layouts.row,
    ...layouts.px.xl,
    ...layouts.py.lg,
    // ...layouts.my.xl,
    ...layouts.mx.xxl,
    ...layouts.rounded,
    borderColor: "#FFC709",
    borderWidth: 1,
    // backgroundColor: "red",

    // ...layouts.xCentered,
    // ...layouts.justifyBetween,
    // ...layouts.yCentered,
  },
  leftContainer: {
    ...layouts.ms.lg,
    // flex: 0.8,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "#FFC709",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "300",

    color: "#FFC709",
  },
});

export default styles;
