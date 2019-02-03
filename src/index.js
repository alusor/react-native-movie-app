import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Movies from './views/Movies';
import Movie from './views/Movie';


const stack = createStackNavigator({
  Movies: {
    screen: Movies, navigationOptions: {
      header: null
    }
  },
  Movie: {
    screen: Movie
  }
}, {
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    },
  })
})

export default createBottomTabNavigator({
  Movies: { screen: stack, navigationOptions: {
    tabBarIcon: ({tintColor}) => <Icon name="md-tv" color={tintColor} size={14}/>
    }
  },
  Favorites: {
    screen: stack, navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="md-heart" color={tintColor} size={14}/>
      },
  }
}, {
  tabBarOptions: {
    activeTintColor: '#FF9645'
  },
});
