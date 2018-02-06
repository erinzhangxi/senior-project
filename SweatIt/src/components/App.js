
import React, { Component } from 'react';
import Login from './Login';


import {View, Text, StyleSheet} from 'react-native';

//import ajax from '../ajax';

class App extends React.Component {
  /*Get Data*/
  //async componentDidMount() {
  //  const data = await ajax.fetchInitialDeals();
  //  console.log(data);
  //}
  render() {
    return (
      <Login />
    );
  }
}

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

export default App;
