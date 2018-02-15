import React, { Component } from 'react';
import { View, StyleSheet  } from 'react-native';
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
  Icon,
  Thumbnail
} from "native-base";

import pl1 from "./../images/pl1.jpg";
import pl2 from "./../images/pl2.jpg";
import pl3 from "./../images/pl3.jpg";
import pl4 from "./../images/pl4.jpg";
import pl5 from "./../images/pl5.jpg";

const datas = [
  {
    route: "RecentPL",
    img: pl1,
    text: "Recent Playlist",
    note: "Workout - Cycling"
  },
  {
    route: "ColumnNB",
    text: "Running",
    img: pl2,
    note: "Workout - 30 Minutes Running"
  },
  {
    route: "NestedGrid",
    text: "Dance",
    img: pl3,
    note: "Workout - Zomba"
  },
  {
    route: "CustomRow",
    text: "strength Training",
    img: pl4,
    note: "Workout - Power HIIT"
  },
  {
    route: "CustomCol",
    text: "Yoga",
    img: pl5,
    note: "Workout - Yoga"
  }
];

class Playlist extends Component {
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
             <Title style={styles.title}>Playlist</Title>
         </Body>
         </Right>
       </Header>

       <Content>
       <List
          dataArray={datas}
          renderRow={data =>
            <ListItem
              button
              onPress={() => this.props.navigation.navigate(data.route)}
            >
              <Left>
                <Thumbnail square size={55} source={data.img} />
              </Left>
              <Body>
              <Text>
                 {data.text}
               </Text>
               <Text numberOfLines={1} note>
                 {data.note}
                 </Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" style={{ color: "#999" }} />
              </Right>
            </ListItem>}
        />
      </Content>
      </Container>
    );
  }
}

const styles=StyleSheet.create({
  title: {
    flex : 1,
    fontSize:40,
    textAlign:'center',
    color: "#FFF",
    fontWeight: '500',
    backgroundColor: 'powderblue'
  },
  container: {
   backgroundColor: "#FFF"
 },
 text: {
   alignSelf: "center",
   marginBottom: 7
 },
 mb: {
   marginBottom: 15
 }
});

export default Playlist;
