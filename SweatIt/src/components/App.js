import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './../configureStore';
import Login from './Login';
import LoginForm from './LoginForm';
import { TabNavigator } from 'react-navigation';
import {View, Text, StyleSheet, NavigatorIOS, TouchableHighlight} from 'react-native';
import Home from './Home';

const store = configureStore();
const rnredux = () => (
  <Provider store={store}>
  <App/>
  </Provider>
)

/*
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
*/

class App extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: 'Home',
        }}
        renderScene={this.renderScene}
        style={{flex: 1}}
      />
    );
  }
}
export default rnredux;
