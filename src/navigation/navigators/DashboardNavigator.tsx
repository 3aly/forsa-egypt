import React from "react";
import { t } from "i18next";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Text, View } from "react-native";
import { Home, Offers, Profile, Retail } from "@screens/index";
import { DashboardTabsParamList } from "@navigation/models";
import { SVG } from "@components/atoms";
import px from "@utils/responsiveUI";
import styles from "./DashboardNavigator.styles";

const DashboardTabs = createBottomTabNavigator<DashboardTabsParamList>();
const DashboardNavigator = () => {
  return (
    <DashboardTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          color: "#000",
        },
        tabBarStyle: {
          paddingTop: px(8),
          alignContent: "center",

          justifyContent: "center",
          alignItems: "center",
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
      initialRouteName="Home"
    >
      <DashboardTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {focused ? (
                <SVG source="HomeFocus" color="#072040" />
              ) : (
                <SVG source="Home" />
              )}

              <Text>{t("home")}</Text>
            </View>
          ),
        }}
      />
      <DashboardTabs.Screen
        name="Retail"
        component={Retail}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {focused ? <SVG source="Retail" /> : <SVG source="Retail" />}

              <Text>{t("retail")}</Text>
            </View>
          ),
        }}
      />
      <DashboardTabs.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {focused ? <SVG source="Offers" /> : <SVG source="Offers" />}

              <Text>{t("offer")}</Text>
            </View>
          ),
        }}
      />

      <DashboardTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {focused ? (
                <SVG source="ProfileFocus" />
              ) : (
                <SVG source="Profile" />
              )}

              <Text>{t("profile")}</Text>
            </View>
          ),
        }}
      />
    </DashboardTabs.Navigator>
  );
};

export default DashboardNavigator;
