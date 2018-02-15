import React, { Component } from 'react';
import { View, StyleSheet, Image  } from 'react-native';
import {RkConfig, RkButton, RkText} from 'react-native-ui-kitten';
import GlobalStyles from './../styles/globalStyle';
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
  List,
 ListItem,
  Icon
} from "native-base";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
      <Header
         style={{ backgroundColor: "powderblue" }}
         androidStatusBarColor="steelblue"
         iosBarStyle="light-content"
       >
        <Left>
        <Button transparent onPress={() => this.props.navigation.goBack()}>
        <Icon name="arrow-back" />
        </Button>
         </Left>
         <Right>
         <Body>
             <Title style={styles.title}>Profile</Title>
         </Body>
         </Right>
       </Header>

       <Content padder>
       
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

export default Profile;
