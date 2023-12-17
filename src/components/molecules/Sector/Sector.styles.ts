import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  itemContainer: {
    ...layouts.allCentered,
    ...layouts.me.lg,
    ...layouts.px.md,
    ...layouts.py.sm,
  },
  activeItem: {
    backgroundColor: "#3EBDAC",
    color: "#FFFFFF",
    borderRadius: 5,
    ...layouts.p.xl,
  },
  activeText: {
    color: "#FFFFFF",
  },
});

export default styles;
