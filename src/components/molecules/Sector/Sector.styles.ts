import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  itemContainer: {
    ...layouts.allCentered,
    ...layouts.mx.lg,
    ...layouts.px.sm,
  },
  activeItem: {
    backgroundColor: "#3EBDAC",
    color: "#FFFFFF",
    ...layouts.rounded,
    // ...layouts.p.xl,
  },
  activeText: {
    color: "#FFFFFF",
  },
});

export default styles;
