import React from "react";
import { t } from "i18next";
// import { SheetManager } from "react-native-actions-sheet";
// import { DashboardTabsParamList } from "@navigation/models";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import styles from "./navigators.styles";
// import { User } from "@common/types";
// import { Icon, SVG } from "@common/components";

import { Text, View } from "react-native";
import { Home, Offers, Profile, Retail } from "@screens/index";
import { DashboardTabsParamList } from "@navigation/models";
import { SVG } from "@components/atoms";

const DashboardTabs = createBottomTabNavigator<DashboardTabsParamList>();
const DashboardNavigator = () => {
  return (
    <DashboardTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        // tabBarStyle: styles.tabBarStyle,
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
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <>
        //       {focused ? (
        //         <SVG source="Queries" />
        //       ) : (
        //         <Icon name={"Inquiries"} color="@offColor" size={20} />
        //       )}

        //       <Text style={focused ? {} : styles.textColor} bold sSmall>
        //         {t("inquiries")}{" "}
        //       </Text>
        //     </>
        //   ),
        // }}
      />
      <DashboardTabs.Screen
        name="Offers"
        component={Offers}
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <View style={styles.iconsContainer}>
        //       {focused ? (
        //         <SVG source="Offers" />
        //       ) : (
        //         <Icon name={"Offers"} color="@offColor" size={20} />
        //       )}

        //       <Text style={focused ? {} : styles.textColor} bold sSmall>
        //         {t("offers")}
        //       </Text>
        //     </View>
        //   ),
        // }}
      />

      <DashboardTabs.Screen
        name="Profile"
        component={Profile}

        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <View style={styles.iconsContainer}>
        //       {focused ? (
        //         <SVG source="Transactions" />
        //       ) : (
        //         <Icon name={"Transactions"} color="@offColor" size={20} />
        //       )}

        //       <Text style={focused ? {} : styles.textColor} bold sSmall>
        //         {t("operations")}
        //       </Text>
        //     </View>
        //   ),
        // }}
      />
    </DashboardTabs.Navigator>
  );
};

export default DashboardNavigator;
