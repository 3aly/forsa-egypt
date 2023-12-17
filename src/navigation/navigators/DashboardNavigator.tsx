import React from "react";
import { t } from "i18next";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Text, View } from "react-native";
import { Home, Offers, Profile, Retail } from "@screens/index";
import { DashboardTabsParamList } from "@navigation/models";
import { SVG } from "@components/atoms";
import px from "@utils/responsiveUI";

const DashboardTabs = createBottomTabNavigator<DashboardTabsParamList>();
const DashboardNavigator = () => {
  return (
    <DashboardTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          color: "#000",
        },
        tabBarStyle: { paddingTop: px(15) },
        headerShown: false,
        tabBarShowLabel: true,
      }}
      initialRouteName="Home"
    >
      <DashboardTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <SVG source="HomeFocus" color="#072040" />
              ) : (
                <SVG source="Home" />
              )}

              <Text>{t("indicators")}</Text>
            </View>
          ),
        }}
      />
      <DashboardTabs.Screen
        name="Retail"
        component={Retail}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? <SVG source="Retail" /> : <SVG source="Retail" />}

              <Text>{t("indicators")}</Text>
            </View>
          ),
        }}
      />
      <DashboardTabs.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? <SVG source="Offers" /> : <SVG source="Offers" />}

              <Text>{t("indicators")}</Text>
            </View>
          ),
        }}
      />

      <DashboardTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <SVG source="ProfileFocus" />
              ) : (
                <SVG source="Profile" />
              )}

              <Text>{t("indicators")}</Text>
            </View>
          ),
        }}
      />
    </DashboardTabs.Navigator>
  );
};

export default DashboardNavigator;
