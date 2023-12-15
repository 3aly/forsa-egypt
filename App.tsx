// import { Dashboard } from "@/navigation/navigators";
import { DashboardNavigator } from "@navigation/navigators";
import ProvidersWrapper from "./ProvidersWrapper";
import { Home } from "./src/screens/index";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

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
