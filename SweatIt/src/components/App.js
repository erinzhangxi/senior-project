import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {View, Text, StyleSheet, NavigatorIOS, TouchableHighlight} from 'react-native';

import Login from './Login';
import LoginForm from './LoginForm';
import Home from './Home';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './../reducers/rootReducer';

import { fetchMessages, checkUserExists } from './../actions/index';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        //loggerMiddleware
    )
);

const LoginOrHome = connect(
    (state) => ({
        authorized: state.user.authorized
    })
)(({ authorized, dispatch }) => {
    if (authorized) {
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
    }else{
        dispatch(checkUserExists());
        return (
          <Login />
        );
    }
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
               <LoginOrHome />
            </Provider>
        );
    }
}

export default App;
