import { combineReducers } from 'redux';
import playlist from './playlistReducer';

const workout = (state, action) => {
    switch (action.type) {
        case 'ADD_WORKOUT':
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

const workouts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_WORKOUT':
            if (state.map(m => m.id).includes(action.id)) {
                return state;
            }else{
                return [
                ...state,
                message(undefined, action)
                ]
            }
        case 'SEND_WORKOUT':
            return [
                ...state,
                message(undefined, action)
            ]
        default:
            return state
    }
};

export default workouts;
