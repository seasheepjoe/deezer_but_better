import { StyleSheet } from "react-native";
import { Metrics, AppStyles } from "../../Themes";

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.headerHeight,
    backgroundColor: "#F08080",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});