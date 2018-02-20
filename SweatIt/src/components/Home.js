import React, { Component } from 'react';
import { View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
  Icon,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import GlobalStyles from './../styles/globalStyle';
import Workouts from './Workouts';
import Playlist from './Playlist';
import IconFooter from './IconFooter';
import Profile from './Profile';
import Login from './Login';

const logo = require("../images/logo.png");
const deviceWidth = Dimensions.get("window").width;
const cardImage = require("../images/home1.jpg");

class Home extends Component {
  constructor(props) {
    super(props);
  }

  _navigate(route){
    if(route== 'workouts') {
      this.props.navigator.push({
        component: Workouts
      })
    }

    if(route == 'login') {
      this.props.navigator.push({
        component: Login
      })
    }
    if(route== 'playlist') {
      this.props.navigator.push({
        component: Playlist
      })
    }
    if(route== 'profile') {
      this.props.navigator.push({
        component: Profile
      })
    }
  }

  popAll() {
    this.props.navigator.popToTop();
  }
  popOnce() {
    this.props.navigator.pop();
  }

  render() {
    const text = 'Start Workout';
    return (
      <Container>
      <Header
      style={{ backgroundColor: "powderblue" }}
      androidStatusBarColor="steelblue"
      iosBarStyle="light-content"
      >
      </Header>
      <Content>
      <View>
      <ImageBackground
      style={{
        height: 300
      }}
      source={cardImage}
      >


      <Button transparent onPress={() => this._navigate("workouts")}
      style={{alignSelf:'center',justifyContent: 'center', flex:1}}>
      <Text
      style={{
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontFamily: 'Copperplate-light',
        color: '#fff',
        fontSize: 30,
        padding: 40,
      }}
      >
      {text}
      </Text>
      </Button>
      </ImageBackground>
      </View>


      <Button transparent onPress={() => this._navigate("login")}
      style={{alignSelf:'center',justifyContent: 'center', flex:1}}>
      <Text
      style={{
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontFamily: 'Copperplate-light',
        color: 'black',
        fontSize: 30,
        padding: 40,
      }}
      >
      Login
      </Text>
      </Button>


      <IconFooter navigator={this.props.navigator} />
      </Content>
      </Container>
    );
  }
}

const styles=StyleSheet.create({
  title: {
    fontSize:40,
    textAlign:'center',
    color: "#FFF",
    fontWeight: '500'
  }
});

export default Home;
