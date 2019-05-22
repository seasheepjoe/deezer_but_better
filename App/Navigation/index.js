import { HomeContainer } from '../Containers';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { TabBar } from '../Components';

const bottomNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeContainer,
  },
}, {
  tabBarComponent: TabBar,
});

const stackNavigator = createStackNavigator({
  Home: {
    screen: bottomNavigator,
  },
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: null,
  },
});

export default createAppContainer(stackNavigator);