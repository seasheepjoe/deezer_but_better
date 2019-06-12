import { StyleSheet } from "react-native";
import { Metrics, AppStyles } from "../../Themes";

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.headerHeight,
    backgroundColor: "red",
    zIndex: 10000,
    position: "absolute",
    bottom: Metrics.tabBarHeight,
  },

  playerModal: {
    width: Metrics.screenWidth,
    position: "absolute",
    zIndex: 100000,
  },
});