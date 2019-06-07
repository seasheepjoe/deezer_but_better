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
  },
});