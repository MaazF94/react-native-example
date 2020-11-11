import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/app/screens/HomeScreen';
import SecondScreen from './src/app/screens/SecondScreen';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      initialRouteName: "Home",
      defaultNavigationOptions: {
        title: "App"
      }
    },
    Second: {
      screen: SecondScreen
    }
  }
);

export default createAppContainer(Navigator);
