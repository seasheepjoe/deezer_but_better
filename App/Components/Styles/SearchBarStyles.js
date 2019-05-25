import { StyleSheet } from "react-native";
import { Metrics, AppStyles } from "../../Themes";

export default StyleSheet.create({
  container: {
    zIndex: 101,
    position: "absolute",
    top: 0,
    width: Metrics.screenWidth,
    height: Metrics.headerHeight,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: Metrics.paddingHorizontal,
  },

  hairlineBorderView: {
    position: "absolute",
    bottom: 0,
    width: Metrics.screenWidth,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E9E9E9",
  },

  textInput: {
    width: "100%",
    height: "100%",
    fontSize: 18,
  },
});