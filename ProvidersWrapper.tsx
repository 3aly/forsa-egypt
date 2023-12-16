import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ProvidersWrapper({ children }) {
  const queryClient = new QueryClient();

  const config = {
    screens: {
      SellingOrderStackNavigator: {
        screens: {
          PublicBuyerOrder: "/transactions/:RequestId",
        },
      },
    },
  };

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <NavigationContainer
              linking={{
                prefixes: [
                  "com.srem.moj://",
                  "https://qa-srem.red.sa",
                  "https://srem.moj.gov.sa",
                ],
                config,
              }}
            >
              {children}
            </NavigationContainer>
          </SafeAreaProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </>
  );
}
