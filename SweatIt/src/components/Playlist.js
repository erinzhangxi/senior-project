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
  Icon
} from "native-base";

const datas = [
  {
    route: "recent-pl",
    text: "Recent Playlist"
  },
  {
    route: "ColumnNB",
    text: "Running"
  },
  {
    route: "NestedGrid",
    text: "Dance"
  },
  {
    route: "CustomRow",
    text: "strength Training"
  },
  {
    route: "CustomCol",
    text: "Yoga"
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

       <Content padder>
       <List
          dataArray={datas}
          renderRow={data =>
            <ListItem
              button
              onPress={() => this.props.navigation.navigate(data.route)}
            >
              <Left>
                <Text>
                  {data.text}
                </Text>
              </Left>
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
  }
});

export default Playlist;
