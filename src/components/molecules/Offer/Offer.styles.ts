import { layouts, spacing } from "@constants/styles";
import px from "@utils/responsiveUI";
import { StyleSheet } from "react-native";
// import { layouts } from "src/constants";

const styles = StyleSheet.create({
  itemContainer: {
    ...layouts.allCentered,
    flex: 1,
    elevation: 8,
    ...layouts.mx.lg,
    borderRadius: 15,
  },

  imageContainer: {
    ...layouts.mx.lg,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: 100,
    width: "100%",
    bottom: px(-10),

    backgroundColor: "grey",
  },

  textContainer: {
    elevation: 8,

    ...layouts.yCentered,
    ...layouts.mx.lg,

    borderRadius: 15,

    backgroundColor: "white",
    flex: 1,
    width: "100%",
    ...layouts.p.xl,
  },
  headline: {
    color: "#000",

    fontSize: 16,
    fontWeight: "400",
  },
  category: {
    color: "#969DA7",

    fontSize: 12,
    fontWeight: "300",
  },
  description: {
    color: "#969DA7",

    fontSize: 12,
    fontWeight: "300",
  },
});

export default styles;
