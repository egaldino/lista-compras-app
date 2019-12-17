import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/pages/Home';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#28F1A6',
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: '#333333',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#ffffff',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
