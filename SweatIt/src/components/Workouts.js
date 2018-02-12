import React, { Component } from 'react';
import { Text, View  } from 'react-native';
import WorkoutItem from './WorkoutItem';

class Workouts extends Component {
  constructor(){
    super();
    this.state = {
      workouts: []
    }
  }

  render() {
    let workoutItems;
    if (this.props.workouts) {
      workoutItems = this.props.workouts.map(workout => {
        console.log(workout);
        return (
            <WorkoutItem />
        );
      });
    }
    return (
      <View>
        <Text>Latest Workouts</Text>
      </View>
    );
  }
}

export default Workouts;
