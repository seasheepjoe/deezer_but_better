import { Metrics } from "../../Themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.headerHeight,
    flexDirection: "row",
    backgroundColor: "aliceblue",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  backButton: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  backIcon: {
    fontSize: 18,
    color: "grey",
  },

  headerInfo: {
    justifyContent: "center",
    alignItems: "flex-start",
  },

  headerTitle: {
    color: "#000",
  },

  headerSubTitle: {
    fontSize: 11,
    fontStyle: "italic",
  },
});