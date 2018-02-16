import React, { Component } from 'react';
import Login from './Login';
import LoginForm from './LoginForm';
import { TabNavigator } from 'react-navigation';
import {View, Text, StyleSheet} from 'react-native';
import Workouts from './Workouts';
import Playlist from './Playlist';
import Profile from './Profile';
import Home from './Home';


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
  Home: {
      screen: Home
  },
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
    initialRouteName: 'Home',
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
