import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from 'react-native-ui-lib';
import { createStackNavigator } from 'react-navigation';
import SplashPage from './components/splashPage';
import MovieCard from './components/movieCard';

const RootStack = createStackNavigator(
  {
    Splash: SplashPage,
    Movie: MovieCard
  },
  {
    initialRouteName: 'Splash'
  }
);

export default class App extends React.Component {

  render() {
    StatusBar.setBarStyle('light-content', true);
    return <RootStack />;
  }
}
