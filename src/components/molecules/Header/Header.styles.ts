import { layouts } from "@constants/styles";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  container: {
    ...layouts.row,
    ...layouts.pt.xxxl,
    ...layouts.my.xl,
    ...layouts.mx.xl,

    ...layouts.justifyBetween,
    ...layouts.yCentered,
  },
  title: {
    color: "#FFF",

    fontSize: 24,
    fontWeight: "400",
  },
  leftContainer: {
    ...layouts.row,
    flex: 0.2,
    ...layouts.justifyBetween,
  },
  emptyView: {
    flex: 0.2,
  },
});

export default styles;
