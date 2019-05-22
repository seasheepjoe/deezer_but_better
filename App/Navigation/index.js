import { HomeContainer } from '../Containers';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const bottomNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeContainer,
  },
});

const stackNavigator = createStackNavigator({
  Home: {
    screen: bottomNavigator,
  },
}, {
  initialRouteName: 'Home'
});

export default createAppContainer(stackNavigator);