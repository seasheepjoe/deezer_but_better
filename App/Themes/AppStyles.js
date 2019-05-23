import { StyleSheet } from 'react-native';
import Metrics from './Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    paddingTop: Metrics.statusBarHeight,
    paddingHorizontal: Metrics.screenWidth * 0.1,
  },
});