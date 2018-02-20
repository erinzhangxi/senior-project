import { combineReducers } from 'redux';
import workout from './WorkoutReducer';

const playlist = (state, action) => {
    switch (action.type) {
        case 'ADD_PLAYLIST':
            return {
                id: action.id,
                text: action.text,
                time: action.time,
                author: action.author
            }
        default:
            return state
    }
}



const playlists = (state = [], action) => {
    switch (action.type) {
          case 'ADD_PLAYLIST':
            if (state.map(m => m.id).includes(action.id)) {
                return state;
            }else{
                return [
                ...state,
                message(undefined, action)
                ]
            }
        case 'SEND_PLAYLIST':
            return [
                ...state,
                message(undefined, action)
            ]
        default:
            return state
    }
};

export default playlists;
