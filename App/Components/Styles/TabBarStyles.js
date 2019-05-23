import { StyleSheet } from 'react-native';
import { Metrics, AppStyles } from '../../Themes';

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
  },

  buttonIcon: {
    fontSize: 20,
  },

  buttonContainerActive: {
    transform: [{ scale: 1.15 }],
  },
});