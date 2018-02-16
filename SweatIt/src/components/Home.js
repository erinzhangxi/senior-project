import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions  } from 'react-native';
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
  Icon,
  Card,
  CardItem,
  Thumbnail
} from "native-base";

const logo = require("../images/logo.png");
const deviceWidth = Dimensions.get("window").width;
const cardImage = require("../images/home1.jpg");

class Home extends Component {
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

         </Left>
         <Right>
         <Body>
             <Title style={styles.title}>Home</Title>
         </Body>
         </Right>
       </Header>

       <Content padder>
       <Card style={styles.mb}>
          <CardItem bordered>
            <Left>
              <Thumbnail source={logo} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Body>
              <Image
                style={{
                  alignSelf: "center",
                  height: 150,
                  resizeMode: "cover",
                  width: deviceWidth / 1.18,
                  marginVertical: 5
                }}
                source={cardImage}
              />
              <Text>
                NativeBase is a free and source framework that enable
                developers to build high-quality mobile apps using React
                Native iOS and Android apps with a fusion of ES6. NativeBase
                builds a layer on top of React Native that provides you with
                basic set of components for mobile application development.
              </Text>
            </Body>
          </CardItem>
          <CardItem style={{ paddingVertical: 0 }}>
            <Left>
              <Button transparent>
                <Icon name="logo-github" />
                <Text>4,923 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
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
