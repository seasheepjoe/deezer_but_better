import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width;
const screenHeight = height;

const isIphoneX = () => {
  const X_WIDTH = 375;
  const X_HEIGHT = 812;
  const XSMAX_WIDTH = 414;
  const XSMAX_HEIGHT = 896;

  return screenWidth === X_WIDTH && screenHeight === X_HEIGHT || screenWidth === XSMAX_WIDTH && screenHeight === XSMAX_HEIGHT;
}

const Metrics = {
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  statusBarHeight: Platform.select({ ios: isIphoneX() ? 44 : 20, android: StatusBar.currentHeight }),
  headerHeight: screenHeight * 0.08,
  isIphoneX
};

export default Metrics;