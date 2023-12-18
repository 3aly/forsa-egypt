import { View, ImageBackground } from "react-native";
import React from "react";
import {
  Header,
  LangPicker,
  ProfileCard,
  Sharable,
} from "@components/molecules";
import styles from "./Profile.styles";
import { IMAGES } from "@assets/index";
import { t } from "i18next";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={IMAGES.smallerBG}>
        <Header showSearch={false} title={t("profile")} />
      </ImageBackground>
      <ProfileCard pic={IMAGES.me} name={t("me")} />
      <Sharable title={t("share_app")} toShare="Share the app" />
      <LangPicker />
    </View>
  );
};

export default Profile;
