import React, { Component } from 'react';

class WorkoutItem extends Component {
  // deleteProject(id){
  //   this.props.onDelete(id);
  // }

  render() {
    return (
        <div className="Workouts">
        <strong>{this.props.workout}</strong>
      </div>

    );
  }
}

export default WorkoutItem;
