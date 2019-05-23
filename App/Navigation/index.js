import { HomeContainer, FlowContainer, MusicContainer, SearchContainer } from '../Containers';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { TabBar } from '../Components';

const bottomNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeContainer,
    params: {
      icon: "home"
    },
  },
  Flow: {
    screen: FlowContainer,
    params: {
      icon: "stream"
    },
  },
  Music: {
    screen: MusicContainer,
    params: {
      icon: "music"
    },
  },
  Search: {
    screen: SearchContainer,
    params: {
      icon: "search"
    },
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