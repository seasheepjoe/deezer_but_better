import { StyleSheet } from "react-native";
import { Metrics, AppStyles } from "../../Themes";

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.tabBarHeight,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: Metrics.isIphoneX() === true ? 15 : 0,
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    minWidth: "25%",
    width: "auto",
  },

  buttonIcon: {
    fontSize: 16, // defines the size of the Font Awesome Icon
  },

  buttonContainerActive: {
    transform: [{ scale: 1.1 }],
  },

  buttonText: {
    fontSize: 13,
  },

  gradientView: {
    width: Metrics.screenWidth,
    height: Metrics.tabBarHeight / 5,
    zIndex: 1000,
    position: "absolute",
    top: - Metrics.tabBarHeight / 5,
    left: 0,
    right: 0,
  }
});