import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  itemContainer: {
    ...layouts.row,
    ...layouts.mx.xxl,
    ...layouts.mt.xxl,
  },
  image: {
    width: px(120), // Adjust width based on desired size
    height: px(120), // Adjust height based on desired size
  },
  text: {
    ...layouts.ms.xl,
    fontSize: 21,
    fontWeight: "400",
  },
});

export default styles;
