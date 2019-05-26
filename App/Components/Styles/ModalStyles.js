import { StyleSheet } from "react-native";
import { Metrics, AppStyles } from "../../Themes";

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    zIndex: 200,
    backgroundColor: "#fff",
    position: "absolute",
    borderColor: "red",
    borderWidth: 1,
  },
});