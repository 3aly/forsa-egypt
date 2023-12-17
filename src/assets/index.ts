import { ImageSourcePropType } from "react-native";

type images = {
  [key: string]: ImageSourcePropType;
};

export const IMAGES: images = {
  headerBG: require("./images/HeaderBackground.png"),
  bannerBG: require("./images/BannerBG.png"),
  smallerBG: require("./images/SmallerBG.png"),
  me: require("./images/me.jpg"),
};
