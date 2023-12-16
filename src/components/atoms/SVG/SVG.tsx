import {
  Favorite,
  Home,
  HomeFocus,
  Logo,
  Note,
  Notification,
  Offers,
  Profile,
  Retail,
} from "@assets/SVG";
import Search from "@assets/SVG/Search";
import React from "react";
import { ViewStyle } from "react-native";

export type Props = {
  source:
    | "Home"
    | "HomeFocus"
    | "Offers"
    | "Retail"
    | "Profile"
    | "Logo"
    | "Search"
    | "Favorite"
    | "Notification"
    | "Note";

  style?: ViewStyle;
  onPress?: Function;
};
type svgType = {
  [key: string]: JSX.Element;
};

const SVG = (props: Props) => {
  const SVGNames: svgType = {
    Home: <Home />,
    HomeFocus: <HomeFocus />,
    Offers: <Offers />,
    Retail: <Retail />,
    Profile: <Profile />,
    Logo: <Logo />,
    Search: <Search />,
    Favorite: <Favorite />,
    Notification: <Notification />,
    Note: <Note />,
  };

  return SVGNames[props.source];
};

export default SVG;
