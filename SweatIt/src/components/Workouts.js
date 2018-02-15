import React, { Component } from 'react';
import { View, StyleSheet  } from 'react-native';
import WorkoutItem from './WorkoutItem';
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

const datas = [
  {
    text: "Cycling",
    note: "2/12/2018 6:50pm 30 minutes"
  },
  {
    text: "HIIT Dance",
    note: "2/14/2018 4:30pm 50 minutes"
  },
  {
    text: "Abs & Legs",
    note: "2/16/2018 12:00pm 45 minutes"
  }
];

class Workouts extends Component {
  constructor(){
    super();
    this.state = {
      workouts: [
    ]
    }
  }

  render() {
     let workoutItems;
     if (this.props.workouts) {
        workoutItems = this.props.workouts.map(workout => {
         console.log(workout);
         return (
    //         <WorkoutItem key={workout.name} workout={workout}/>
            <WorkoutItem />
         );
       });
     }
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
             <Title style={styles.title}>Workouts</Title>
         </Body>
         </Right>
       </Header>

       <Content>
       <List
          dataArray={datas}
          renderRow={data =>
            <ListItem>
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

export default Workouts;
