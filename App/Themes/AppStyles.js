import { StyleSheet } from "react-native";
import Metrics from "./Metrics";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    // paddingTop: Metrics.isIphoneX() === true ? Metrics.statusBarHeight : 0,
    // paddingHorizontal: Metrics.paddingHorizontal,
  },
});