import { layouts } from "@constants/styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column", // ...layouts.mx.xxl,
  },
  imageContainer: {
    // height: "20%",
    flex: 0.3,

    // bottom: 10,
  },
});

export default styles;
