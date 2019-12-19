import React from 'react';
import {Root} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/pages/Home';
import ListScreen from './src/pages/List';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Lista: {
      screen: ListScreen,
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
