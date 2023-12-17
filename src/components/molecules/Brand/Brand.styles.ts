import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  itemContainer: {
    ...layouts.allCentered,
  },
  image: {
    width: px(75), // Adjust width based on desired size
    height: px(60), // Adjust height based on desired size
    borderRadius: 1,
    borderColor: "#D4D4D4",
    borderWidth: 1,
    ...layouts.mx.lg,
    backgroundColor: "#D4D1Df",
  },
  activeText: {
    color: "#FFFFFF",
  },
});

export default styles;
