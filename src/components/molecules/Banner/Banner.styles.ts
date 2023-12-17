import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  container: {
    ...layouts.row,
    paddingVertical: spacing.xxxl + px(7),
    ...layouts.my.xl,
    ...layouts.px.xl,
    ...layouts.mx.xl,
    borderRadius: 23,
    borderColor: "#3EBDAC",
    borderWidth: 2,

    ...layouts.yCentered,
  },
  leftContainer: {
    ...layouts.row,
    ...layouts.yCentered,
    ...layouts.ms.lg,
    flex: 0.65,
    ...layouts.justifyBetween,
  },
  title: {
    fontSize: 16,
    lineHeight: 19,

    fontWeight: "400",
  },
});

export default styles;
