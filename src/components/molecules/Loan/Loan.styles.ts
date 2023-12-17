import { layouts, spacing } from "@constants/styles";
import { StyleSheet } from "react-native";

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
