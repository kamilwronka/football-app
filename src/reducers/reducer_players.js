import { GET_TEAM_PLAYERS } from '../actions';

export default function(state ={}, action) {
    switch(action.type) {
        case GET_TEAM_PLAYERS:
            return action.payload.data;
        default:
            return state;
    }
}