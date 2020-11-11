import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/app/screens/HomeScreen';
import SecondScreen from './src/app/screens/SecondScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
