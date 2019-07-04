import { StyleSheet } from "react-native";
import { Metrics, AppStyles } from "../../Themes";

export default StyleSheet.create({
  container: {
    paddingTop: Metrics.headerHeight,
    paddingHorizontal: 0,
  },

  sectionHeader: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  sectionHeaderTitle: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginRight: 10,
    includeFontPadding: false,
  },

  sectionIcon: {
    color: "#000",
    fontSize: 13,
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
    paddingHorizontal: Metrics.paddingHorizontal * 0.9,
    paddingVertical: Metrics.statusBarHeight / 2,
    zIndex: 99,
  },

  loadingScreen: {
    ...StyleSheet.absoluteFill,
    zIndex: 100,
    top: Metrics.headerHeight,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight - Metrics.headerHeight - Metrics.tabBarHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  openModalButtonContainer: {
    width: "100%",
    height: Metrics.screenHeight * 0.03,
    borderRadius: 3,
    marginVertical: 5,
    marginBottom: 25,
  },

  openModalButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  openModalButtonText: {
    fontSize: 12,
    color: "#32323D"
  },
});