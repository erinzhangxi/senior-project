import React, { Component } from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import WorkoutItem from './WorkoutItem';

class Workouts extends Component {
  constructor(){
    super();
    this.state = {
      workouts: [
    /*  {
        name: 'Cycling',
        time: '6:50pm',
        date: '2/12/2018',
        duration: '30 minutes',
        playlist: 'Summer Playlist'
      },
      {
        name: 'HIIT Dance',
        time: '4:30pm',
        date: '2/14/2018',
        duration: '50 minutes',
        playlist: 'Feel Good'
      },
      {
        name: 'Abs & Legs',
        time: '12:00pm',
        date: '2/16/2018',
        duration: '30 minutes',
        playlist: 'Top Hits'
      }*/
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
  //    <View style={styles.container}>
  //      <div className="Workouts">
  //          <Text style={styles.title}>Latest Workouts</Text>
            //<Workouts workouts={this.state.workouts} />

  //      </div>
  //    </View>
          <View style={styles.container}>
            <Text style={styles.title}>Latest Workouts</Text>
          </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    backgroundColor: '#F3ECC8',
    flex: 1
  },
  title: {
    backgroundColor: '#F3ECC8',
    fontSize:40,
    textAlign:'center',
    color: "#2980b9",
    fontWeight: '700'
  }
});

export default Workouts;
