import { FETCH_FIXTURES_BY_LEAGUE_ID } from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_FIXTURES_BY_LEAGUE_ID:
            const { fixtures } = action.payload.data; 
            return action.payload.data;
        default:
            return state;
    }
}