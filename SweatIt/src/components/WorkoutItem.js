import React, { Component } from 'react';

class WorkoutItem extends Component {
  render() {
    return (
    //    <li className="Workout">
    //    <strong>{this.props.workout.name}</strong> : {this.props.workout.playlist}
    //    </li>
    <div className="Workouts">
        <strong>{this.props.workout}</strong>
      </div>
    );
  }
}

export default WorkoutItem;
