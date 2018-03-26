import { GET_TEAM_DETAILS } from '../actions';

export default (state = {}, action) => {
    switch(action.type) {
        case GET_TEAM_DETAILS:
            return action.payload.data;
        default:
            return state;
    }
}