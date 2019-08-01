import { StyleSheet } from "react-native";
import { Metrics, AppStyles } from "../../Themes";

const FULL_HEIGHT = Metrics.screenHeight - Metrics.statusBarHeight;
export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: FULL_HEIGHT,
    zIndex: 200,
    backgroundColor: "#fff",
    position: "absolute",
    margin: 0,
    padding: 0,
    justifyContent: "flex-start",
    top: Metrics.isIphoneX() === true ? Metrics.statusBarHeight : 0,
  },

  tracksList: {
    backgroundColor: "#fafafa",
  },

  tracksListContent: {
    paddingHorizontal: Metrics.paddingHorizontal,
    paddingVertical: Metrics.statusBarHeight / 2,
    zIndex: 99,
  },
});