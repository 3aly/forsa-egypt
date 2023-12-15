import { Home, HomeFocus, Offers, Profile, Retail } from "@assets/SVG";
import React from "react";
import { ViewStyle } from "react-native";

export type Props = {
  source: "Home" | "HomeFocus" | "Offers" | "Retail" | "Profile";

  width?: number;
  height?: number;
  color?: string;
  rotateDegree?: number;
  opacity?: number;
  style?: ViewStyle;
  onPress?: Function;
};
type svgType = {
  [key: string]: JSX.Element;
};

const SVG = (props: Props) => {
  const SVGNames: svgType = {
    Home: <Home params={props} />,
    HomeFocus: <HomeFocus params={props} />,
    Offers: <Offers params={props} />,
    Retail: <Retail params={props} />,
    Profile: <Profile params={props} />,
  };

  return SVGNames[props.source];
};

export default SVG;
