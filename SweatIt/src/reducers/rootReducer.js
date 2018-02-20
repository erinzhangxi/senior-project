import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import user from './user';
import workout from './WorkoutReducer';
import playlist from './playlistReducer';

const rootReducer = combineReducers( {
  firebase,
  user,
  workout,
  playlist
});

export default rootReducer;
