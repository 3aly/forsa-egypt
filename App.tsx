// import { Dashboard } from "@/navigation/navigators";
import { DashboardNavigator } from "@navigation/navigators";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProvidersWrapper from "./ProvidersWrapper";

function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar /> */}
      <DashboardNavigator />
    </View>
  );
}
const AppWithProvider = () => {
  return (
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  );
};
export default AppWithProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
