import { StyleSheet } from "react-native";
import { Metrics, AppStyles } from "../../Themes";

export default StyleSheet.create({
  container: {
    paddingTop: Metrics.headerHeight,
    paddingHorizontal: 0,
  },

  sectionHeaderTitle: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 5,
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 14,
  },

  itemText: {
    marginLeft: 15,
  },

  sectionList: {
    backgroundColor: "#fafafa",
  },

  sectionListContent: {
    paddingHorizontal: Metrics.paddingHorizontal,
    paddingVertical: Metrics.statusBarHeight / 2,
    zIndex: 99,
  },

  loadingScreen: {
    ...StyleSheet.absoluteFill,
    zIndex: 100,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});