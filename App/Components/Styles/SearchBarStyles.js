import { StyleSheet } from "react-native";
import { Metrics, AppStyles } from "../../Themes";

export default StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: Metrics.screenWidth,
    height: Metrics.headerHeight,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: Metrics.paddingHorizontal,
  },
});