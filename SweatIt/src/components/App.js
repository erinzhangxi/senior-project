import React, { Component } from 'react';
import Login from './Login';
import LoginForm from './LoginForm';
import { TabNavigator } from 'react-navigation';
import {View, Text, StyleSheet} from 'react-native';
import Workouts from './Workouts';
import Playlist from './Playlist';
import Profile from './Profile';


class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <RootTab />
    );
  }
}

const RootTab = TabNavigator(
{
  Login: {
      screen: Login
  },
  Playlist: {
      screen: Playlist
  },
  Workouts: {
      screen: Workouts
  },
  Profile: {
      screen: Profile
  }
},
{
    initialRouteName: 'Login',
}
);

const styles=StyleSheet.create({
  container: {
    backgroundColor:'#ddd',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  header: {
    fontSize:40,
  },
});

export default RootTab;
