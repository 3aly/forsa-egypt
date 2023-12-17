import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  itemContainer: {
    ...layouts.allCentered,
    ...layouts.p.xl,
    ...layouts.mx.lg,
    ...layouts.my.sm,
    borderRadius: 8,
    flex: 1,
  },

  text: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

export default styles;
