import {
  View,
  Text,
  ImageBackground,
  Button,
  Share,
  Pressable,
} from "react-native";
import React from "react";
import {
  Header,
  LangPicker,
  ProfileCard,
  Sharable,
} from "@components/molecules";
import styles from "./Profile.styles";
import { IMAGES } from "@assets/index";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={IMAGES.smallerBG}>
        <Header showSearch={false} title={"Profile"} />
      </ImageBackground>
      <ProfileCard pic={IMAGES.me} name={"Ali Hefny"} />
      <Sharable title="Share the app" toShare="Share the app" />
      <LangPicker />
    </View>
  );
};

export default Profile;
